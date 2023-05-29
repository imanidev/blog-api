import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
});

// hash password before saving to mongoDB
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10); // 10 rounds
    const hashedPassword = await bcrypt.hash(this.password, salt); 
    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

// validate password method
userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
}

const User = mongoose.model('User', userSchema);

export default User;
