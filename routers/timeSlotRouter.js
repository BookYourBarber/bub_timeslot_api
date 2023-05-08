const router = require('express').Router()

const time_slots = [
    {
        dayId: 1,
        timeslot_id: 1,
        start_time: (() => {
            const startTime = new Date();
            startTime.setHours(9);
            startTime.setMinutes(0);
            startTime.setSeconds(0);
            return startTime;
          })(),
        end_time: (() =>{
            const endTime = new Date();
            endTime.setHours(9);
            endTime.setMinutes(25);
            endTime.setSeconds(0);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 1,
        timeslot_id: 2,
        start_time: (() => {
            const startTime = new Date();
            startTime.setHours(9);
            startTime.setMinutes(30);
            startTime.setSeconds(0);
            return startTime;
          })(),
        end_time: (() =>{
            const endTime = new Date();
            endTime.setHours(9);
            endTime.setMinutes(55);
            endTime.setSeconds(0);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 1,
        timeslot_id: 3,
        start_time: (() => {
            const startTime = new Date();
            startTime.setHours(10);
            startTime.setMinutes(0);
            startTime.setSeconds(0);
            return startTime;
          })(),
        end_time: (() =>{
            const endTime = new Date();
            endTime.setHours(10);
            endTime.setMinutes(25);
            endTime.setSeconds(0);
            return endTime;
          })(),
        //unavailable, available
        type: "Available" 
    },
    {
        dayId: 2,
        timeslot_id:4,
        start_time: (() => {
            const startTime = new Date();
            startTime.setHours(10);
            startTime.setMinutes(30);
            startTime.setSeconds(0);
            return startTime;
          })(),
        end_time: (() =>{
            const endTime = new Date();
            endTime.setHours(10);
            endTime.setMinutes(55);
            endTime.setSeconds(0);
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