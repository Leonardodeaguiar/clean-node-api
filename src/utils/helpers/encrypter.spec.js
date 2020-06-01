const bcrypt = require('bcryptjs')

class Encrypter {
  async compare (value, hash) {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}

describe('Encrypter', () => {
  test('should return true if bcrypt returns true', async () => {
    const sut = new Encrypter()
    const isValid = await sut.compare('any_value', 'hash')

    expect(isValid).toBe(true)
  })
  test('should return false if bcrypt returns false', async () => {
    const sut = new Encrypter()
    bcrypt.isValid = false
    const isValid = await sut.compare('any_value', 'hash')

    expect(isValid).toBe(false)
  })
  test('should call bcrypt with correct values', async () => {
    const sut = new Encrypter()
    bcrypt.isValid = false
    await sut.compare('any_value', 'hash')

    expect(bcrypt.value).toBe('any_value')
    expect(bcrypt.hash).toBe('hash')
  })
})
