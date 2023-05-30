const mongoose = require('mongoose');
const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: formattedDate 
  },
  updatedAt: {
    type: Date,
    default: formattedDate
  }
});

console.log(`Today's date is ${formattedDate}`);


module.exports = mongoose.model('Post', postSchema);
