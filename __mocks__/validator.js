// quando um arquivo na pasta __mocks__ é criado o jest substitui a lib por ele
module.exports = {
  isEmailValid: true,
  email: '',
  isEmail (email) {
    this.email = email
    return this.isEmailValid
  }
}
