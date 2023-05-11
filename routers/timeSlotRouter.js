const router = require('express').Router()
const moment = require('moment')

const time_slots = [
    {
        dayId: 1,
        timeslot_id: 1,
        start_time: (() => {
          const startTime = moment();
          startTime.set('hour', 9);
          startTime.set('minute', 0);
            return startTime;
          })(),
        end_time: (() =>{
          const endTime = moment();
          endTime.set('hour', 9);
          endTime.set('minute', 25);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 1,
        timeslot_id: 2,
        start_time: (() => {
            const startTime = moment();
            startTime.set('hour', 9);
            startTime.set('minute', 30);
            return startTime;
          })(),
        end_time: (() =>{
          const endTime = moment();
          endTime.set('hour', 9);
          endTime.set('minute', 55);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 1,
        timeslot_id: 3,
        start_time: (() => {
            const startTime = moment();
            startTime.set('hour', 10);
            startTime.set('minute', 00);
            return startTime;
          })(),
        end_time: (() =>{
          const endTime = moment();
          endTime.set('hour', 10);
          endTime.set('minute', 25);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 2,
        timeslot_id:4,
        start_time: (() => {
            const startTime = moment();
            startTime.set('hour', 10);
            startTime.set('minute', 30);
            return startTime;
          })(),
        end_time: (() =>{
            const endTime = moment();
            endTime.set('hour', 10);
            endTime.set('minute', 55);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
      dayId: 4,
      timeslot_id:5,
      start_time: (() => {
          const startTime = moment();
          startTime.set('hour', 10);
          startTime.set('minute', 30);
          return startTime;
        })(),
      end_time: (() =>{
          const endTime = moment();
          endTime.set('hour', 10);
          endTime.set('minute', 55);
          return endTime;
        })(),
      //unavailable, available
      type: "Available" 
  },
  {
    dayId: 4,
    timeslot_id:6,
    start_time: (() => {
        const startTime = moment();
        startTime.set('hour', 10);
        startTime.set('minute', 30);
        return startTime;
      })(),
    end_time: (() =>{
        const endTime = moment();
        endTime.set('hour', 10);
        endTime.set('minute', 55);
        return endTime;
      })(),
    //unavailable, available
    type: "Available" 
}
]

router.get("/:id", async (req, res) =>{

    const id = req.params.id

    const day_slots = time_slots.filter(ts => {
        return ts.dayId === parseInt(id)
    })

    if(day_slots === 0){
        return res.sendStatus(404)
    }

    return res.json(day_slots)
})

module.exports = router