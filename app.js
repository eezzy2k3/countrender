require("dotenv").config()
const express = require("express");
const createRoute = require("./src/routes/routes");
const errorHandler = require("./src/middlewares/errorHandler");
const task = require("./job");


// initializing express
const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)


// imitializing Db
const connectDb = require("./config/config")


// connection to Db
connectDb()

task.start()

app.use("/api/v1/countdown", createRoute)


const port = process.env.PORT || 3000

app.listen(port,()=>{
 console.log(`app is listening on http://localhost:${port}`)
})

module.exports = app