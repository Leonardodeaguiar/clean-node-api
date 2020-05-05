const httpResponse = require('../helpers/httpResponse')
module.exports = class LoginRouter {
  constructor (authUseCaseSpy) {
    this.authUseCaseSpy = authUseCaseSpy
  }
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return httpResponse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return httpResponse.badRequest('email')
    }
    if (!password) {
      return httpResponse.badRequest('password')
    }
    this.authUseCaseSpy.auth(email, password)
    return {
      statusCode: 401
    }
  }
}
