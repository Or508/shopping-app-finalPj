
// 🔐 BACKEND: controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'האימייל כבר רשום' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = generateToken(newUser._id);
    res.status(201).json({
      token,
      user: { _id: newUser._id, email: newUser.email, username: newUser.username }
    });
  } catch (error) {
    res.status(500).json({ message: 'שגיאת שרת', error: error.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'משתמש לא נמצא' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'סיסמה שגויה' });

    const token = generateToken(user._id);
    res.json({ token, user: { _id: user._id, email: user.email, username: user.username } });
  } catch (error) {
    res.status(500).json({ message: 'שגיאה בשרת', error: error.message });
  }
};
