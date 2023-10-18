const express = require("express")
const cors = require("cors")
const newsRouter = require("./news")
const app = express()

const PORT = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use("/news", newsRouter)

app.listen(PORT, () => {
    console.log("Server running in port: " + PORT)
})