require("dotenv").config()

const express = require("express")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const errorHandler = require("./src/middlewares/errorHandler")

const connectDb = require("./config/config")

const task = require("./job")

const createRoute = require("./src/routes/countDownRoute")

connectDb()

task.start()

app.use("/api/v1/countdown",createRoute)

app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port,()=>{
 console.log(`app is listening on port ${port}`)
})

