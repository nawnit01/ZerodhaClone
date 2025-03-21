const {Schemas} = require('mongoose');

const HoldingsSchema = new Schemas({
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
});

module.exports = HoldingsSchema;