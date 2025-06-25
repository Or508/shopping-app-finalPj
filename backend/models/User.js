const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true, sparse: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  profile: {
    firstName: String,
    lastName: String,  // ← תוקן!
    address: String,
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// לפני שמירת משתמש – להצפין את הסיסמה
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // להצפין רק אם השתנתה
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// להשוואת סיסמה בעת התחברות
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.models?.User ?? mongoose.model("User", userSchema);


module.exports = User;