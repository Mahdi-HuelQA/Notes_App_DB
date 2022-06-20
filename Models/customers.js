const mongoose = require('mongoose')

const customersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  noteCreated: {
    type: String,
    required: true
  },
  // _id: { type: String }
  // noteDate: {
  //   type: Date,
  //   required: true,
  //   default: Date.now
  // }
})

module.exports = mongoose.model('customers', customersSchema)