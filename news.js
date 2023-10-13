const express = require("express")
const newsRouter = express.Router()

const news = [
    {
        id: 1,
        lead_image: "https://averdade.org.br/wp-content/uploads/2023/10/gaza-3829379_1920-1024x683.jpg",
        title: "CIPOML apoia a resistência do povo palestino",
        date: "10 de outubro de 2023",
    },
    {
        id: 2,
        lead_image: "https://averdade.org.br/wp-content/uploads/2023/10/gaza-3829379_1920-1024x683.jpg",
        title: "CIPOML apoia a resistência do povo palestino",
        date: "10 de outubro de 2023",
    },
    {
        id: 3,
        lead_image: "https://averdade.org.br/wp-content/uploads/2023/10/gaza-3829379_1920-1024x683.jpg",
        title: "CIPOML apoia a resistência do povo palestino",
        date: "10 de outubro de 2023",
    },
]

const getIndexById = (id, elementList) => {
    return elementList.find(element => element.id === Number(id))
}

const updateElement = (id, queryArguments, elementList) => {
    const elementIndex = getIndexById(id, elementList);
    if (elementIndex === -1) {
      throw new Error('updateElement must be called with a valid id parameter');
    }
    if (queryArguments.id) {
      queryArguments.id = Number(queryArguments.id);
    }
    Object.assign(elementList[elementIndex], queryArguments);
    return elementList[elementIndex];
};

// Get all news
newsRouter.get("/", (req, res) => {
    res.send(news)
})

// Get news by ID
newsRouter.get("/:id", (req, res) => {
    const newsId = news.find(notice => notice.id === Number(req.params.id))

    newsId ? res.send(newsId) : res.status(404).send("News not found")
})

// Update news
newsRouter.put("/:id", (req, res) => {
    const newsIndex = news.findIndex(notice => notice.id === Number(req.params.id))
    
    if (newsIndex !== -1) {
        updateElement(req.params.id, req.query, news)
        res.send(news[newsIndex])
    } else {
        res.status(404).send()
    }
})

module.exports = newsRouter