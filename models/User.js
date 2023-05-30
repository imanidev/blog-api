const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt_rounds = 10;


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
});

// save password as hash
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, salt_rounds);
    return next();
});


module.exports = mongoose.model('User', userSchema);