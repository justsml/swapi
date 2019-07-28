require('dotenv')

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = module.exports = express()
const server = http.createServer(app)
const config = require('./config')
const middleware = require('./middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(config.devMode ? 'dev' : 'combined'))
app.use(cors({ origin: true }))

app.use(middleware.checkBaseUrl)

app.use('/api/people', require('./routes/people'))

app.get('/', (req, res, next) => {
  res.send({
    films: `${config.baseUrl}/api/films/`,
    people: `${config.baseUrl}/api/people/`,
    planets: `${config.baseUrl}/api/planets/`,
    species: `${config.baseUrl}/api/species/`,
    starships: `${config.baseUrl}/api/starships/`,
    vehicles: `${config.baseUrl}/api/vehicles/`
  })
})
// TODO: ADD (MOUNT) YOUR MIDDLEWARE (ROUTES) HERE
// ^^^ Example: app.use('/v1/kitten', require('./routes/kitten'))
// ^^^ Example:

app.use(notFound)
app.use(errorHandler)

server.listen(config.port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + config.port))

function notFound (req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important auto requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({ error: 'Url not found', status: 404, url })
}

function errorHandler (err, req, res, next) {
  console.error('ERROR', err)
  const stack = config.devMode ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}
