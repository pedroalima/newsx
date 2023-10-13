const express = require("express")
const newsRouter = express.Router()

const news = []

// Get all news
newsRouter.get("/", (req, res) => {
    res.send(news)
})

// Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = news.find(element => element.id === Number(req.params.id))
    newsId ? res.send(newsId) : res.status(404).send("News not found")
})

// Create news
newsRouter.post("/", (req, res) => {
    const { lead_image, title, date } = req.body
    const notice = {
        lead_image,
        title,
        date
    }
    news.push(notice)
    res.status(201).json(notice)
})

// // Update news
// newsRouter.put("/:id", (req, res, next) => {
    
// })

module.exports = newsRouter