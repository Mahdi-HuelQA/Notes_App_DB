// require('dotenv').config()
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require('cors')
 
// const customersRouter = require('./routes/customers')
// const app = express();
// app.use(cors())

// app.use(express.json())

// mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))



// app.use('', customersRouter)

// app.listen(8000, () => console.log('Server Started'))



require('dotenv').config()
const express = require("express");
const cors = require('cors')


// db connection
// let db

// connectToDb((err) => {
//   if(!err){
//     app.listen('3000', () => {
//       console.log('app listening on port 3000')
//     })
//     db = getDb()
//   }
// })

const customersRouter = require('./routes/customers')
const app = express();
app.use(cors())
app.use(express.json())
app.use('', customersRouter)
app.listen(8000, async () => {
  console.log('Server Started')
})





























