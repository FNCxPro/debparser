const defaultsProvider = require('../providers/Defaults'),
      Package          = require('../Package'),
      Parser           = require('./Parser'),
      fetch            = require('node-fetch')

class PackagesParser extends Parser {
  /**
   * Parse a String
   * @param {String} contents 
   * @param {ParseOptions} [options={}] 
   */
  parse(contents, options={}) {
    options = defaultsProvider.assignDefaults(options)
    let packages = {length: 0}
    if (options.array) packages=[]
    let packageStrings = contents.split(/\n{2,}/g)
    packageStrings.forEach((str) => {
      let pkg = new Package(str)
      if (options.array) {
        packages.push(pkg)
      } else {
        if (!packages[pkg.package]) packages[pkg.package] = {}
        packages[pkg.package][pkg.version] = pkg
        packages.length = packages.length + 1
      }
      
    })
    return packages
  }

  /**
   * Parse from a URL
   * @param {String} url 
   * @param {ParseOptions} [options={}] 
   */
  async parseUrl(url, options={}) {
    options = defaultsProvider.assignDefaults(options)
    const res = await fetch(url, {
      method: 'GET',
      headers: options.headers
    })
    const body = await res.text()
    return this.parse(body, options)
  }
}

module.exports = PackagesParser