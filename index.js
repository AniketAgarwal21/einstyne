const express = require("express")
const router = require("./routes")
const app = express()
const http = require("http").Server(app)

app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT || 8000
http.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})