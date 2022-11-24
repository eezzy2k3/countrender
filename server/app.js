require("dotenv").config()

const express = require("express")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const errorHandler = require("./src/middlewares/errorHandler")

const connectDb = require("./config/config")

connectDb()

app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port,()=>{
 console.log(`app is listening on port ${port}`)
})

module.exports = app