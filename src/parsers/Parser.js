const defaultsProvider = require('../providers/Defaults')

/**
 * @typedef {Object} ParseOptions
 * @prop {Object} [headers=[{'User-Agent':"Debian APT-HTTP/1.3"}]] 
 */
/**
 * Base Parser class
 */
class Parser {
  /**
   * Parse from a String
   * @param {String} contents 
   * @param {ParseOptions} [options={}] 
   */
  parse(contents, options={}) {
    options = defaultsProvider.assignDefaults(options)
    throw new Error('Not yet implemented')
  }

  /**
   * Parse from a URL
   * @param {String} url 
   * @param {ParseOptions} [options={}] 
   */
  parseUrl(url, options={}) {
    options = defaultsProvider.assignDefaults(options)
    throw new Error('Not yet implemented')
  }
}

module.exports = Parser