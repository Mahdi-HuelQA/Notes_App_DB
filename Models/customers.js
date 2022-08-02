const mongoose = require('mongoose');
const { DateTime } = require('luxon');


const customersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  noteCreated: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  noteDate: {
    type: String,
    required: true,
    default: DateTime.now().toLocaleString(),
  },
});



 module.exports = mongoose.model('customers', customersSchema);



 



