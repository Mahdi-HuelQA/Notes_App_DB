const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Customer = require('../Models/customers');
// const customersSchema = require('../Models/customers')
const { DateTime } = require('luxon');

// Get all Notes:
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.send(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by Id
router.get('/:id', async (req, res) => {
  // let id = req.params.id;
  try {
    const customers = await Customer.findById({ _id: req.params.id });
    res.send(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating new Note
router.post('/', async (req, res) => {
  console.log('here post');

  const customersSchema = Joi.object().keys({
    name: Joi.string().trim().required(),
    noteCreated: Joi.string().trim().required(),
    tag: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    media: Joi.string().trim(),
  });
  const customer = new Customer({
    name: req.body.name,
    noteCreated: req.body.noteCreated,
    tag: req.body.tag,
    noteDate: req.body.noteDate,
    email: req.body.email,
    media: req.body.media,
    noteDate: (req.body.newDate = DateTime.now().toLocaleString()),
  });
  const validation = customersSchema.validate(req.body);
  if (validation?.error) {
    console.log('validated!');

    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } else {
    console.log('failed');
    res.status(400).json({ message: validation.error });
  }
});

// Deleting One
router.delete('/:id', async (req, res) => {
  try {
    await Customer.remove({ _id: req.params.id });
    res.json({ message: 'Deleted Customer' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete all
router.delete('/', async (req, res) => {
  try {
    await Customer.remove();
    res.json({ message: 'Deleted Customer' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// //Creating new Note (old mongoose)
// router.post('/', async(req,res) => {
//   console.log('here post');
//   console.log(req.body)
//   // const { error } = validate(req.body);

//   const customer  = new Customer({
//     name: req.body.name,
//     noteCreated: req.body.noteCreated,
//     tag: req.body.tag,
//     noteDate: req.body.noteDate,
//     email: req.body.email,
//     media: req.body.media

//   })

//   try {
//     const newCustomer = await customer.save()
//     res.status(201).json(newCustomer)
//   }
//   catch(err){
//     res.status(400).json({ message: err.message })
//   }

// })
