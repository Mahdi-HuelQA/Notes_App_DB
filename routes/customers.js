const express = require('express');
const router = express.Router();

// const Customer = require('../Model/customer');
// const customersSchema = require('../Models/customers')
const { DateTime } = require('luxon');

const { getDb} = require('../libs/db')
const  { getCustomers, getCustomer, save, deleteOne } = require("../repositories/customer-repository")

const { validate } = require('../libs/customers/validator.js')

// db connection
let db = getDb()



// Get all Notes: Refactored
router.get('/', async (req, res) => {
  try {
    const customers = await getCustomers()
    res.send(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by Id
router.get('/:id', async (req, res) => {
  // let id = req.params.id;
  try {
    const customers = await getCustomer(req.params.id);
    res.send(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating new Note
router.post('/', async (req, res) => {
  console.log('here post');

  try {
    const customer = await validate(req.body)

    customer.noteDate = (req.body.newDate = DateTime.now().toLocaleString())

    await save(customer)

    res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Deleting One
router.delete('/:id', async (req, res) => {
  try {
    await deleteOne( req.params.id );
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


