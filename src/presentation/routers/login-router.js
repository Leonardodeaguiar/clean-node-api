const httpResponse = require('../helpers/http-response')
const MissingParamError = require('../helpers/missingParamError')
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
      return httpResponse.badRequest(new MissingParamError('email'))
    }

    if (!password) {
      return httpResponse.badRequest(new MissingParamError('password'))
    }
    this.authUseCaseSpy.auth(email, password)
    return httpResponse.unauthorizedError()
  }
}
