require("dotenv").config()
const mongoose = require("mongoose")

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log("Database Connected Successfully")
    });
}

module.exports = dbConnect

