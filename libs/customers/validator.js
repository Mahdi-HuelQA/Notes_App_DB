const Joi = require('joi');

const validate = (payload) => {
  const customersSchema = Joi.object().keys({
    id: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    noteCreated: Joi.string().trim().required(),
    tag: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    media: Joi.string().trim().allow(null)
  });
  
  return customersSchema.validateAsync(payload);
}

module.exports = {
  validate
}