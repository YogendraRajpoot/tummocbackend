const logoutUser = (req, res) => {
  localStorage.removeItem("jwtToken");
  res.json({ message: "Logout successful" });
};

module.exports = logoutUser;
