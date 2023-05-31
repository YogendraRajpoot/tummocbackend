const User = require("../models/User");

exports.getUserWithCity = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("city");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user" });
  }
};
