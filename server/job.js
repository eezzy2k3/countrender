const cron = require("node-cron")

const CountDown = require("./src/models/countDownModel")

const task = cron.schedule('* * * * *', async(req,res) => {
    const events = await CountDown.find()
    let todaysDate = new Date().getTime()
     
     for(let i = 0; i<events.length; i++){
        let eventDate =  new Date(events[i].eventDate).getTime()
        const difference = eventDate - todaysDate
        if(difference < 0){
            await CountDown.findOneAndDelete({eventName:events[i].eventName})
            console.log("task ran")
        }

  }})

  module.exports = task