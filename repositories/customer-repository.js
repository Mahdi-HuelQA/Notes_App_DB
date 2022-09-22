const { getDb } = require('../libs/db');
const { param } = require('../routes/customers');

var mongo = require('mongodb');

let database;

const connect = async () => {
  database = await getDb()
}

const getCustomers = async () => {
  await connect()

  const cursor = await database.collection('customers').find()

  const customers = []

  await cursor.forEach( (customer) => customers.push(customer))

  return customers
}

const getCustomer = async (id) => {
  await connect()
  return await database.collection('customers').findOne({id: Number(id)})
}

const save = async (customer) => {
  await connect()
  await database.collection('customers').updateOne({id: customer.id}, { $set: customer }, {upsert: true})
}

const deleteOne = async (id) => {
  await connect()
  return await database.collection('customers').deleteOne({id})

}

module.exports =  {
  getCustomers,
  getCustomer,
  save, deleteOne
}




