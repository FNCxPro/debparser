const chai = require('chai'),
      path = require('path'),
      fs   = require('fs')
chai.should()
chai.use(require('chai-things'))
const { PackagesParser } = require('../src')
const contents = fs.readFileSync(path.join(__dirname, 'Packages'), 'utf8')
describe('PackagesParser', () => {
  let parser = new PackagesParser()
  describe('#parse', () => {
    let results = parser.parse(contents)
    it('should be an object', () => {
      results.should.be.an('object')
    })
    it('should have a length of 4', () => {
      results.should.have.lengthOf(4)
    })
  })
})
describe('PackagesParser', () => {
  let parser = new PackagesParser()
  let results
  before(async () => {
    results = await parser.parseUrl('https://gist.githubusercontent.com/FNCxPro/fa2dc16d22bf587ec735f9b83c19388a/raw/Packages')
  })
  describe('#parseUrl', () => {
    it('should be an object', () => {
      results.should.be.an('object')
    })
    it('should have a length of 4', () => {
      results.should.have.lengthOf(4)
    })
  })
})

