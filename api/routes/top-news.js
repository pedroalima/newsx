const express = require("express")
const topNewsRouter = express.Router()

const { db } = require("../db")

// Get top 3 news
topNewsRouter.get("/", (req, res) => {
    const q = "SELECT * FROM news ORDER BY date DESC LIMIT 3;"

    db.query(q, (err, data) => {
        if (err) res.json(err)

        res.status(200).json(data)
    })
})

module.exports = topNewsRouter