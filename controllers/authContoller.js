const User = require("../models/userSchema")

class authController {

    register = async (req, res) => {
        const { name, email, password } = req.body

        // Basic Validations (Not Complete Yet)
        if (!name || !email || !password) {
            return res.json({ error: "Please fill all fields!" })
        }
        if (password.length < 8) {
            return res.json({ error: "Password too short!" })
        }
        
        // Check DB if user with email exists
        const userExists = await User.findOne({ email }).exec()
        if (userExists) {
            return res.json({ error: "Email already exists!" });
        }

        // Create the New User
        const newUser = new User({ name, email, password })
        newUser.save((err, doc) => {
            if (err) return res.json({ error: "Some Error Occurred" });
            return res.json({ success: "User Created!" });
        });


    }

    login = (req, res) => {

    }
}

module.exports = new authController()