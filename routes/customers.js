const express = require("express");
const router  = express.Router()
const Customer = require('../Models/customers')

// Get all Notes: 
router.get('/', async(req, res) => {
  try {
    const customers = await Customer.find({})
    res.send(customers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// Get by Id
router.get('/:id', async(req,res) => {
  // let id = req.params.id;
  try {
    const customers = await Customer.findById({_id: req.params.id})
    res.send(customers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  
})

//Creating new Note
router.post('/', async(req,res) => {
  const customer  = new Customer({
    name: req.body.name,
    noteCreated: req.body.noteCreated

  }) 
  try {
    const newCustomer = await customer.save()
    res.status(201).json(newCustomer)
  }
  catch(err){
    res.status(400).json({ message: err.message })
  }
  
})

// Updating One 
router.patch('/:id', getCustomer,(req,res) => {
  
})

// Deleting One 
router.delete('/:id', async (req,res) => {
  try {
    await res.customer.remove()
    res.json({ message: 'Deleted Customer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  
})

async function getCustomer(req, res, next) {
  let cust
  try {
    customer = await Customer.findById(req.params.id)
    if (customer == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.customer = customer
  next()
}

module.exports = router