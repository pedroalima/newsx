const express = require("express")
const app = express()
const PORT = process.env.PORT || 4001
const newsRouter = require("./news")

app.use(express.json())
app.use("/news", newsRouter)

app.listen(PORT, () => {
    console.log("Server running in port: " + PORT)
})