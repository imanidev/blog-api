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
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
    default: 'Imani'
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


// Routes...
// Index : Show all the things! - GET /fruits
// New : An empty form for a new thing - GET /fruits/new
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited) 
