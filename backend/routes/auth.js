const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); // Import the User model

// Middleware to verify JWT token
async function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token.split(" ")[1], "key", async function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // If everything is good, save to request for use in other routes
    req.userId = decoded.userId; // Assuming userId is encoded in the token

    // Fetch user details from database
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      // Include username and email in the request object
      req.username = user.username;
      req.email = user.email;
      next();
    } catch (error) {
      return res.status(500).send({ message: "Error fetching user details." });
    }
  });
}

// Route handler for /api/auth
router.get("/", verifyToken, function (req, res) {
  // At this point, the token is verified
  // You can fetch the token information from the database or wherever it's stored
  const tokenInfo = {
    userId: req.userId,
    username: req.username,
    email: req.email
  };

  res.status(200).json(tokenInfo); // Sending response as JSON
});

module.exports = router;
