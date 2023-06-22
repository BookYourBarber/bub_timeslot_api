const router = require('express').Router()
const moment = require('moment')
const db = require("../models")

//create a timeslot
router.post("/", async (req, res) => {

    const dayId = req.body.dayId;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const type = req.body.type;

    if(!dayId && !startTime && !endTime && !type){
      return res.sendStatus(404)
    }

    let timeslot;

    try{
      timeslot = await db.TimeSlot.create({
        dayId: dayId,
        startDate: startTime,
        endDate: endTime,
        type: type
      })
    }catch(err){
      console.log(err)
      return res.sendStatus(500)
    }

    return res.sendStatus(200)
})

//get all timeslots by dayId
router.get("/:id", async (req, res) => {

  const dayId = req.params.id
  let timeslots;
  let queryOptions = {}

  if(dayId){
    queryOptions.where = {dayId: dayId}
  }

  try{
    timeslots = await db.TimeSlot.findAll(queryOptions);
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }

  return res.json(timeslots)
})

router.get("/", async (req,res) => {
  
  let timeslots;

  try{
    timeslots = await db.TimeSlot.findAll();
  }catch(err){
    console.log(err)
    return res.sendStatus(500)
  }

  return res.json(timeslots)
})
module.exports = router