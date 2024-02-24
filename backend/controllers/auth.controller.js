export const signup = (req, res) => {
  console.log("signupUser");
  res.send("SignUp")
};

export const login = (req,res) => {
  console.log("loginUser");
  res.send("Login");
};

export const logout = (req,res) => {
  res.send("Logout");
  console.log("logoutUser");
};
