const item = require('./Item');
const Schema = require('mongoose').Schema;


const itemSchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String },
  image: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});


module.exports = itemSchema;