const UnauthorizedError = require('./unauthorizedError')
module.exports = class httpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }
  static serverError () {
    return { statusCode: 500 }
  }
  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
  static success () {
    return {
      statusCode: 200
    }
  }
}
