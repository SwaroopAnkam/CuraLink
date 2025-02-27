require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signUp = async (req, res) => {
    try {
      const { firstName, lastName, email, phone, password} = req.body;
  
      // Check for required fields
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please fill in all the required fields to sign up.",
        });
      }
  
      // Validate email format
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address.",
        });
      }
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email is already registered.",
        });
      }
  
      // Validate password strength
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
        return res.status(400).json({
          success: false,
          message:
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
        });
      }
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user entry including phone number
      const user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
      });
  
      return res.status(200).json({
        success: true,
        message: "User is registered successfully",
        user,
      });
    } catch (error) {
      console.error("Error in signUp:", error);
      return res.status(500).json({
        success: false,
        message: "User cannot be registered. Please try again.",
        error: error.message,
      });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validate input presence
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please provide both email and password.",
        });
      }
  
      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format. Please provide a valid email address.",
        });
      }
  
      // Retrieve user from the database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials. User is not registered. Please sign up.",
        });
      }
  
      // Optional: Check if the user is already logged in (if you want to prevent multiple sessions)
      if (user.token) {
        return res.status(401).json({
          success: false,
          message: "User is already logged in.",
        });
      }
  
      // Compare provided password with stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials. Please check your email and password.",
        });
      }
  
      // Prepare JWT payload
      const payload = {
        id: user._id,
        email: user.email,
      };
  
      // Generate token
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
  
      // Optionally, update the user record with the token (if you track sessions)
      user.token = token;
      await user.save();
  
      // Remove sensitive info before sending response
      user.password = undefined;
  
      // Set cookie options (adjust secure flag as needed for production)
      const cookieOptions = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      };
  
      res.cookie("token", token, cookieOptions).status(200).json({
        success: true,
        message: "Logged in successfully.",
        token,
        user,
      });
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({
        success: false,
        message: "Login failed. Please try again later.",
        error: error.message,
      });
    }
  };
  
  

