const crypto = require('crypto')

let defaults = {
  headers: {
    'user-agent': 'Debian APT-HTTP/1.3'
  },
  array: false
}

function getDefaults() {
  return defaults
}

function setDefaults(options) {
  Object.assign(defaults, options)
}

function assignDefaults(options) {
  return Object.assign({}, defaults, options)
}

function setupForCydia() {
  setDefaults({
    headers: {
      'x-unique-id': crypto.randomBytes(20).toString('hex'),
      'x-machine': 'iPhone8,2',
      'x-firmware': '11.3.1',
      'user-agent': 'Telesphoreo APT-HTTP/1.0.592',
    }
  })
}

module.exports = {
  getDefaults,
  setDefaults,
  assignDefaults,

  setupForCydia
}