const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')

app.use(cors())
app.use(express.json())

const timeSlotRouter = require("./routers/timeSlotRouter")

app.use("/timeslots", timeSlotRouter)

db.sequelize.sync().then((req) => {
  app.listen(5004, () => {
    console.log('Server started on port 5002');
  });
})
