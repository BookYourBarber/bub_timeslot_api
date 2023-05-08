const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const timeSlotRouter = require("./routers/timeSlotRouter")

app.use("/timeslots", timeSlotRouter)

app.listen(5004, () => {
  console.log('Server started on port 5002');
});
