const User = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.createUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const update = { username, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      update.password = hashedPassword;
    }
    const updatedUser = await User.findByIdAndUpdate(id, update, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = exports;