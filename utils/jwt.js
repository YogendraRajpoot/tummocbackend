const jwt = require("jsonwebtoken");

const generateJWT = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Set the expiration time as desired
  });
  return token;
};

const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = { generateJWT, verifyJWT };
