const validator = require('validator')
const EmailValidator = require('./emailValidator')
const { MissingParamError } = require('../errors')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    validator.isEmailValid = false
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any@email.com')
    expect(validator.email).toBe('any@email.com')
  })
  test('should throw if no email is provided', async () => {
    const sut = makeSut()
    ;('quando a excessao não é assyncrona voce passa apenas o pontero ou uma arrow function')
    expect(() => {
      sut.isValid()
    }).toThrow(new MissingParamError('email'))
  })
})
