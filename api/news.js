const express = require("express")
const { v4 } = require('uuid')
const newsRouter = express.Router()

const { getId, getIndex } = require("./utils")

const news = []

// Get all news
newsRouter.get("/", (req, res) => {
    res.send(news)
})

// Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = getId(req.params.id, news)
    newsId ? res.send(newsId) : res.status(404).send("News not found")
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