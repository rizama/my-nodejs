const express = require('express')
const Router = express.Router()

Router.get("/route", (req, res, next) => {
    res.send("Hello Router")
})

Router.get("/route2", (req, res, next) => {
    res.send("Hello Another Router")
})

module.exports = Router;