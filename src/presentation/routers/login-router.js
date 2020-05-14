const httpResponse = require('../helpers/http-response')
const MissingParamError = require('../helpers/missingParamError')
module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }
  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return httpResponse.badRequest(new MissingParamError('email'))
      }

      if (!password) {
        return httpResponse.badRequest(new MissingParamError('password'))
      }

      const accessToken = await this.authUseCase.auth(email, password)
      if (!accessToken) {
        return httpResponse.unauthorizedError()
      }
      return httpResponse.success({ accessToken })
    } catch (error) {
      //console.error(error)
      return httpResponse.serverError()
    }
  }
}
