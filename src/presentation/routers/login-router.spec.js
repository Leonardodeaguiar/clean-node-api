class LoginRouter {
  route (httpRequest) {
    const { email, password } = httpRequest.body
    if (!email || !password) {
      return { statusCode: 400 }
    }
  }
}

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
  })
})
describe('Login Router', () => {
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
  })
})
