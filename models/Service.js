const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ServiceSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictures: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  adress: {
    type: String,
    isAdmin: false,
  },
});

module.exports = mongoose.model("Service", ServiceSchema);