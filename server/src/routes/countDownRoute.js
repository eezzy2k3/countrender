const express = require("express")
const {createCountDown} = require("../controllers/eventController")



const router = express.Router()

router.post("/",createCountDown)


module.exports = router