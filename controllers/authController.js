const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const { generateJWT } = require("../utils/jwt");

const googleAuthController = async (req, res) => {
  try {
    const { idToken } = req.body;

    // Verify the Google ID token
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { sub, email, name } = ticket.getPayload();

    // Check if the user already exists in the database
    let user = await User.findOne({ googleId: sub });

    if (!user) {
      // If the user does not exist, create a new user
      user = new User({
        googleId: sub,
        email,
        name,
      });
      await user.save();
    }

    // Generate JWT token for the user
    const token = generateJWT(user._id);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = googleAuthController;
