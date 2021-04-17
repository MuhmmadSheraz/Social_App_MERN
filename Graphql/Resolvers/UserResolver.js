const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserValidation } = require("../../Utils/UserValidtaion");
const { UserInputError } = require("apollo-server");
module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, password, confirmPassword, email } }
    ) {
      const { errors, isValid } = UserValidation(
        username,
        password,
        confirmPassword,
        email
      );
      if (!isValid) {
        throw new UserInputError("Erorrs", { errors });
      }
      const existingUser = User.findOne({ username });
      if (existingUser) {
        throw new UserInputError("UserName is Already Taken", {
          errors: {
            userName: "This Is UserName Is Taken",
          },
        });
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
      const token = jwt.sign(
        {
          id: res.id,
          email: res.email,
          username: res.username,
        },
        "SimpleJWTTOKEN",
        {
          expiresIn: "30min",
        }
      );
      return {
        ...res._doc,
        token,
      };
    },
  },
};
