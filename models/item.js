const mongoose = require('mongoose')
const Schema = mongoose.Schema



const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('item', itemSchema);