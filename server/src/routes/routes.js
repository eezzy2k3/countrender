const express = require("express");
const router = express.Router();
const { getCountDown, createCountDown } = require("../controllers/eventController")



// routes for get and post
router.get('/:eventName', getCountDown);
router.post('/', createCountDown)


module.exports = router