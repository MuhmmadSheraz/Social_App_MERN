module.exports.UserValidation = (
  userName,
  password,
  confirmPassword,
  email
) => {
  const errors = {};
  if (!userName || !password || !confirmPassword || !email) {
    errors.userName = "Please Fill The Required Feild";
  }
  if (password !== confirmPassword) {
    console.log(password, confirmPassword);
    errors.confirmPasswords = "Password Do not Match";
  }
  if (password.length < 6) {
    errors.password = "Password Must Be Greater Than 6";
  }
  return {
    errorFound: Object.keys(errors).length,
    isValid: Object.values(errors),
  };
};

module.exports.UserLoginValidation = (userName, password) => {
  const errors = {};
  if (!userName || !password) {
    errors.userName = "Please Fill The Required Feild";
  }
  return {
    errors,
    isValid: Object.keys(errors).length < (1)[0],
  };
};
