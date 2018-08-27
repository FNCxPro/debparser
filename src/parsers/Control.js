const defaultsProvider = require('../providers/Defaults'),
      Parser           = require('./Parser')

class ControlParser extends Parser {
  /**
   * Parse a String
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

module.exports = ControlParser