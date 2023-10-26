const express = require("express")
const { v4 } = require('uuid')
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

// Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = getId(req.params.id, news)
    const q = "SELECT * FROM news WHERE id = ? LIMIT 1";

    db.query(q, [newsId], (err, data) => {
        if (err) res.json(err)

        res.status(200).json(data[0])
    })
})

// Create news
newsRouter.post("/", (req, res) => {
    const { lead_image, title, date } = req.body
    const notice = {
        id: v4(),
        lead_image,
        title,
        date
    }
    news.push(notice)
    res.status(201).json(notice)
})

// Update news
newsRouter.put("/:id", (req, res) => {
    const { id } = req.params
    const noticeIndex = getIndex(id, news)
    const { lead_image, title, date } = req.body
    if (noticeIndex !== -1) {
        newNotice = {
            id,
            lead_image,
            title,
            date
        }
        news[noticeIndex] = newNotice
        res.json(news[noticeIndex])
    } else {
        res.status(404).send("News not found")
    }
})

// Delete news
newsRouter.delete("/:id", (req, res) => {
    const { id } = req.params
    const noticeIndex = getIndex(id, news)
    if (noticeIndex !== -1) {
        news.splice(noticeIndex, 1)
        res.status(204).send()
    } else {
        res.status(404).send("News not found")
    }
})

module.exports = newsRouter