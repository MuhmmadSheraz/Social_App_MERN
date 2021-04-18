const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");
module.exports = (context) => {
  // this context provide me headers from client side (auth Token)
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, "SimpleJWTTOKEN");
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
  } else {
    throw new AuthenticationError("AuthHeader Not Found");
  }
};
