const express = require("express")
const cors = require("cors")
const newsRouter = require("./routes/news")
const topNewsRouter = require("./routes/top-news")
const app = express()

const PORT = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use("/news", newsRouter)
app.use("/top-news", topNewsRouter)

app.listen(PORT, () => {
    console.log("Server running in port: " + PORT)
})