const express = require("express")
const router = require("./routes")
const app = express()
const http = require("http").Server(app)

app.use(express.json())
app.use('/', router)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client", "build")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8000
http.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})