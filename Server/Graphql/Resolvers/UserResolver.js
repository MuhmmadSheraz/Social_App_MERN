const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  UserValidation,
  UserLoginValidation,
} = require("../../Utils/UserValidtaion");
const { UserInputError } = require("apollo-server");
const { validate } = require("../../Models/User");

const generateToken = (res) => {
  return jwt.sign(
    {
      id: res.id,
      email: res.email,
      username: res.username,
    },
    "SimpleJWTTOKEN",
    {
      expiresIn: "1h",
    }
  );
};

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, password, confirmPassword, email } }
    ) {
      const { isValid, errorFound } = UserValidation(
        username,
        password,
        confirmPassword,
        email
      );

      if (errorFound !== 0) {
        throw new Error(Object.values(isValid));
      }
      const existingUser = await User.findOne({ username: username });
      if (existingUser) {
        throw new Error("User Name is Already Taken");
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        confirmPassword,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        token,
      };
    },
    async loginUser(_, { loginInput: { username, password, email } }) {
      const { errors, isValid } = UserLoginValidation(username, password);
      if (!isValid) {
        throw new Error(Object.values(errors));
      }
      const res = await User.findOne({ username });
      if (!res) {
      }
      const matchPassword = await bcrypt.compare(password, res.password);
      if (!matchPassword) {
        throw new Error("Invalid Password");
      }
      const token = generateToken(res);
      return {
        username: res.username,
        email: res.email,
        createdAt: res.createdAt,
        id: res._id,
        token: token,
      };
    },
  },
};
