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


// Deleting One 
router.delete('/:id', async (req,res) => {
  try {
    await Customer.remove({_id: req.params.id})
    res.json({ message: 'Deleted Customer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  
})



module.exports = router