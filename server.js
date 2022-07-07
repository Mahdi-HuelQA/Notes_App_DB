require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
 
const customersRouter = require('./routes/customers')
const app = express();
app.use(cors())

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))



app.use('', customersRouter)

app.listen(8000, () => console.log('Server Started'))





























// async function connect() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error(error);
//   }
// }

// connect();

// app.listen(8000, () => {
//   console.log("Server started on port 8000");
// });