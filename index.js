const express = require("express")
const router = require("./routes")
const path = require("path")
const app = express()
const http = require("http").Server(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(express.json())
app.use('/', router)


const PORT = process.env.PORT || 8000
http.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})