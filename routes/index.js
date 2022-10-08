const express = require('express')
const Model = require('../model/');

const routes = express.Router()

//Post Method
routes.post('/post', async(req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})
routes.get('/getAll/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = routes