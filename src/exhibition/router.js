const express = require("express");
const router = express.Router()

const { addExhibition } = require("./controller")

router.post("/", addExhibition)

module.exports = router;