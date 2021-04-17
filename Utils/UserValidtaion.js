module.exports.UserValidation = (
  userName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (!userName || !password || !confirmPassword || !email) {
    errors.userName = "Please Fill The Required Feild";
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = "Password Don't Match";
  }
  if (password.length < 6) {
    errors.password = "Password Must Be Greater Than 6";
  }
  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  };
};
