const mongoose = require('mongoose');

const fillupSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  price: Number,
  gallons: Number,
  mileage: Number
});

const Fillup = mongoose.model('Fillup', fillupSchema);

module.exports = Fillup;
