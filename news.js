const express = require("express")
const { v4 } = require('uuid')
const newsRouter = express.Router()

const news = []

// Functions utils
const getId = (elementList, id) => {
    return elementList.find(element => element.id === Number(id))
}

// Get all news
newsRouter.get("/", (req, res) => {
    res.send(news)
})

// Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = getId(news, req.params.id)
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

// // Update news
// newsRouter.put("/:id", (req, res, next) => {
    
// })

module.exports = newsRouter