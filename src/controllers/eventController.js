const CountDown = require("../models/countDownModel")
const ErrorResponse = require("../utils/errorResponse")
const moment = require("moment")

const createCountDown = async (req,res,next)=>{
    try {
        let {eventName,eventDescription,eventDate} = req.body

        // check if an event with name exist

        const checkEventName = await CountDown.findOne({eventName})

        if(checkEventName) return next(new ErrorResponse(`The event name ${eventName} already exist,create a unique event name`,400))
        
        eventDate = moment(new Date(eventDate)).format("YYYY-MM-DD hh:mm")
        
        let todaysDate = new Date().getTime()
    
      const eventTime = new Date(eventDate).getTime()

      const difference = eventTime - todaysDate

      if(difference < 0) return next(new ErrorResponse(`Event ${eventName} has occured already`,400))
       
     
        const countdown =   await CountDown.create({eventName,eventDescription,eventDate})

        res.status(201).json({success:true,message:`you have successfully created ${eventName} event`,countdown})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

const getCountDown = async (req,res,next) => {
    const eventName = req.params.eventName;
    const event = await CountDown.findOne({eventName});
    
    if(!event) return next( new  ErrorResponse(`No ${eventName} event`,404));
    
    let todaysDate = new Date().getTime();
    const eventDate = new Date(event.eventDate).getTime();
    const difference = (eventDate - todaysDate)/1000
    
    if(difference < 0) return next(new ErrorResponse("event has occurred", 400));
       
    res.status(200).json({ success: true, message:`This is the count down for ${event.eventName}, a ${event.eventDescription}`,time:event.eventDate}
)}

module.exports = { getCountDown, createCountDown }