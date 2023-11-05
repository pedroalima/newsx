const express = require("express")
const newsRouter = express.Router()

const { getId, getIndex } = require("./utils")
const { db } = require("./db")

// Get all news
newsRouter.get("/", (req, res) => {
    const q = "SELECT * FROM news"
    
    db.query(q, (err, data) => {
        if (err) res.json(err)

        res.status(200).json(data)
    })
})

//Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = req.params.id
    const q = "SELECT * FROM news WHERE id = ? LIMIT 1";

    db.query(q, [newsId], (err, data) => {
        if (err) res.json(err)

        res.status(200).json(data[0])
    })
})

// Create news
newsRouter.post("/", (req, res) => {
    const { lead_image, title, date, content } = req.body
    const q = "INSERT INTO news (id, lead_image, title, date, content) VALUES (DEFAULT, ?, ?, ?, ?)"

    db.query(q, [lead_image, title, date, content], (err) => {
        if (err) return res.json(err)

        return res.status(201).json("News created successfully")
    })
})

// Update news
newsRouter.put("/:id", (req, res) => {
    const { id } = req.params
    const { lead_image, title, date, content } = req.body
    const q = "UPDATE news SET lead_image = ?, title = ?, date = ?, content = ? WHERE id = ?"

    db.query(q, [lead_image, title, date, content, id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Updated news successfully")
    })
})

// Delete news
newsRouter.delete("/:id", (req, res) => {
    const { id } = req.params
    const q = "DELETE FROM news WHERE id = ?"

    db.query(q, [id], (err) => {
        if (err) return res.json(err)

        return res.status(204).json("News deleted successfully")
    })
})

module.exports = newsRouter