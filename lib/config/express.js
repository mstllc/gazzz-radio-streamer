const morgan = require('morgan')
const bodyParser = require('body-parser')

module.exports = function (server) {
  server.disable('x-powered-by')
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(bodyParser.json())

  server.use(morgan('dev'))
}
