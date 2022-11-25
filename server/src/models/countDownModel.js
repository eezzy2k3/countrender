const mongoose = require("mongoose")

const countDownSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventDescription:{
        type:String,
        required:true
    },
    eventDate:{
        type:Date,
        required:true
    }
   
},{timestamps:true})

const CountDown = mongoose.model("CountDown",countDownSchema)

module.exports = CountDown