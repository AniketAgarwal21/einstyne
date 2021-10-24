// password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/)
// regex for minimum 8 characters, at least one uppercase, one lowercase, and one number

// At least one upper case letter, (?=.*?[A-Z])
// At least one lower case letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)
