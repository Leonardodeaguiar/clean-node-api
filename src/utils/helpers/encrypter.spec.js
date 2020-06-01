const bcrypt = require('bcryptjs')
const Encrypter = require('./encrypter')
const MissingParamError = require('../errors/missingParamError')

const makeSut = () => {
  const sut = new Encrypter()
  return sut
}

describe('Encrypter', () => {
  test('should return true if bcrypt returns true', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'hash')

    expect(isValid).toBe(true)
  })
  test('should return false if bcrypt returns false', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    const isValid = await sut.compare('any_value', 'hash')

    expect(isValid).toBe(false)
  })
  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()
    bcrypt.isValid = false
    await sut.compare('any_value', 'hash')

    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hash')
  })
  test('should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(sut.compare()).rejects.toThrow(new MissingParamError('value'))
    expect(sut.compare('any_value')).rejects.toThrow(
      new MissingParamError('hash')
    )
  })
})
