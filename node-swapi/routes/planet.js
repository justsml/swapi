const router = module.exports = require('express').Router()

const planets = require('../data/planets.json') // in-memory 'dummy data source'

// Standard CRUD routes:
router.get('/', getAll)
router.get('/:id', getOne)

function getAll (req, res, next) {
  res.json({ data: planets })
}

function getOne (req, res, next) {
  const planet = planets.find(planet => planet.id === req.params.id)
  if (!planet) return next({ status: 404, message: 'planet not found.' })
  res.status(200).json({ data: planet })
}
