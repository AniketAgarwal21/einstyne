const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) return next(err)
    this.password = hashedPassword
    next()
  })
})

userSchema.methods.comparePassword = async function (password, done) {
  try {
    const isMatch = await bcrypt.compare(password, this.password)
    if (!isMatch) {
      return done(null, isMatch);
    } else {
      const user = this
      user.password = null
      return done(null, user);
    }
  } catch (err) {
    return done(err);

  }
}

module.exports = mongoose.model("User", userSchema);
