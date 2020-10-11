const express = require('express')
const debug = require('debug')('debug:example')
const router = express.Router()
const { ExampleData } = require('../models')

router.put('/', (req, res) => {
  const entry = { author: req.body.author, data: req.body.data }
  ExampleData.upsert(entry)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => {
      debug(e)
      res.status(400).send(e.name)
    })
  console.log(req.body.testData)
})

router.post('/', async (req, res) => {
  let result
  try {
    if (req.body.author === undefined) result = await ExampleData.findAll()
    else
      result = await ExampleData.findOne({
        where: { author: req.body.author },
      })
    res.send(result)
  } catch (e) {
    res.send(e.name)
  }
})

router.post('/remove', async (req, res) => {
  try {
    console.log(req.body)
    await ExampleData.destroy({
      where: { author: req.body.author },
    })
    res.sendStatus(200)
  } catch (e) {
    res.status(400).send(e.name)
  }
})
module.exports = router
