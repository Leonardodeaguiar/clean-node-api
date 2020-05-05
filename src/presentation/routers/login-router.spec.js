const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missingParamError')

describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    // Sut: system under test. indica o sistema a ser testado!
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'Qualquer coisa'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
  test('Should return 400 if no password is provided', () => {
    // Sut: system under test. indica o sistema a ser testado!
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'Qualquer@coisa.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
  test('Should return 500 has no body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
