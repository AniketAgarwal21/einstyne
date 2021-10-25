// Router
const express = require("express");
const router = express.Router()

// Controllers
const authContoller = require("./controllers/authContoller");

// Middlewares

// Auth Routes
router.post('/register', authContoller.register)
router.post('/login', authContoller.login)

module.exports = router