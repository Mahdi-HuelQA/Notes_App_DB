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


// let customersSchema = mongoose.Schema({
//   name: String,
//   noteCreated: String,
//   tag: String,
// 	email: String,
// 	media: String,
// 	noteDate: { type: Date, default: DateTime.now().toLocaleString(),},
// });
 
// customersSchema.methods.joiValidate = function(obj) {
// 	let Joi = require('joi');
// 	let schema = {
// 		name:Joi.string().trim().required(),
//   noteCreated: Joi.string().trim().required(),
//   tag: Joi.string().trim().required(),
//   email: Joi.string().trim().email().required(),
//   media: Joi.string().trim().required(),
// 	}
// 	return Joi.validate(obj, schema);
// }
 

// const customersSchema = Joi.object().keys({
//   name:Joi.string().trim().required(),
//   noteCreated: Joi.string().trim().required(),
//   tag: Joi.string().trim().required(),
//   email: Joi.string().trim().email().required(),
//   media: Joi.string().trim().required(),
//   noteDate: {
//     Date: Joi.string().trim().required(),
//     default: DateTime.now().toLocaleString(),
//   },
// });

// module.exports = {customersSchema};

