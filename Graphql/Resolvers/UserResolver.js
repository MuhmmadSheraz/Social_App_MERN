const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  UserValidation,
  UserLoginValidation,
} = require("../../Utils/UserValidtaion");
const { UserInputError } = require("apollo-server");

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
      if (password === confirmPassword) {
        console.log(true);
        console.log(email);
      }

      const { errors, isValid } = UserValidation(
        username,
        email,
        password,
        confirmPassword
      );
      if (!isValid) {
        throw new UserInputError("Erorrs", { errors });
      }
      console.log("new UserName==>", username);
      const existingUser = await User.findOne({ username: username });
      if (existingUser) {
        console.log(username)
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
      console.log("newUser===>", newUser);
      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        token,
      };
    },
    async loginUser(_, { loginInput: { username, password, email } }) {
      const { errors, isValid } = UserLoginValidation(
        username,
        password,
        email
      );
      if (!isValid) {
        throw new UserInputError("Erorrs", { errors });
      }
      const res = await User.findOne({ username });
      if (!res) {
        throw new UserInputError("No User Exists");
      }
      const matchPassword = await bcrypt.compare(password, res.password);
      if (!matchPassword) {
        throw new Error("Incorect Password");
      }
      const token = generateToken(res);
      return {
        email: res.email,
        createdAt: res.createdAt,
        id: res._id,
        token: token,
      };
    },
  },
};
