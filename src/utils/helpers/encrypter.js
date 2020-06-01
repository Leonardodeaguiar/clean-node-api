const bcrypt = require('bcryptjs')

module.exports = class Encrypter {
  async compare (value, hash) {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}