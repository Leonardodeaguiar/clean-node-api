const UnauthorizedError = require('./unauthorizedError')
const MissingParamError = require('./missingParamError')
const ServerError = require('./serverError')

module.exports = class httpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }
  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }
  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
  static success (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
