
const router = module.exports = require('express').Router()

const peoples = require('../data/people.json') // in-memory 'dummy data source'
const { reshapeObjectFields } = require('../models/helpers.js')

// Standard CRUD routes:
router.get('/', getAll)
router.get('/:id', getOne)

function getAll (req, res, next) {
  res.json({ data: reshapeObjectFields(peoples) })
}

function getOne (req, res, next) {
  const people = peoples.find(people => people.id === req.params.id)
  if (!people) return next({ status: 404, message: 'people not found.' })
  res.status(200).json({ data: people })
}
