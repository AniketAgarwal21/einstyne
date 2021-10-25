class authValidator {

    registerValidator = (name, email, password) => {
        if (email === "" || password === "" || name === "") {
            return { message: "Please fill all the fields!", type: "error" }
        }
        
        if (password.length < 8) {
            return { message: "Password too short!", type: "error" }
        }
        
        return { message: "Validation Sucess", type: "success" }
    }

    loginValidator = (email, password) => {
        if (email === "" || password === "") {
            return { message: "Please fill all the fields!", type: "error" }
        }
        
        if (password.length < 8) {
            return { message: "Password too short!", type: "error" }
        }
        
        return { message: "Validation Sucess", type: "success" }
    }

}

export default new authValidator()