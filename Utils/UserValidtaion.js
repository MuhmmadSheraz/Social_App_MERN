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
    errors.confirmPasswords= "Password Do not Match";
  }
  if (password.length < 6) {
    errors.password = "Password Must Be Greater Than 6";
  }
  return {
    errors,
    isValid: Object.keys(errors).length < 1,
  };
}

module.exports .UserLoginValidation=(
    userName,
    email,
    password,
    confirmPassword
)=>{
    const errors = {};
    if (!userName || !password ||!email ) {
      errors.userName = "Please Fill The Required Feild";
    }
    return {
      errors,
      isValid: Object.keys(errors).length < 1,
    };
}