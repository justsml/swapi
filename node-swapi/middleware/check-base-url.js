const config = require('../config')

module.exports = (req, res, next) => {
  if (config.baseUrl) return next()
  const port = config.port === 80 || !config.port ? '' : `:${config.port}`
  config.baseUrl = `${req.protocol}://${req.hostname}${port}`
  next()
}
