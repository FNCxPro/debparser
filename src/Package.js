class Package {
  /**
   * Construct a new Package
   * @param {String} info 
   * @param {Boolean} [fromPackages=false] 
   */
  constructor(info, fromPackages=false) {
    let _info = info.split('\n')
    const self = this
    let obj = {}
    _info.forEach((line) => {
      let lineSplit = line.split(':')
      if (!lineSplit) return
      let field = (lineSplit[0] || '').trim()
      let value = (lineSplit[1] || '').trim() 
      obj[field] = value
    }) 
    if (obj.Package) this.package = obj.Package
    if (obj.Source) this.source = obj.Source
    if (obj.Version) this.version = obj.Version
    if (obj.Section) this.section = obj.Section
    if (obj.Priority) this.priority = obj.Priority
    if (obj.Architecture) this.architecture = obj.Architecture
    if (obj.Essential) this.essential = obj.Essential
    if (obj.Depends) this.dependencies = this.depends = obj.Depends.split(',').map((item)=>item.trim())
    if (obj.Recommends) this.recommendations = this.recommends = obj.Recommends.split(',').map((item)=>item.trim())
    if (obj.Suggests) this.suggestions = this.suggets = obj.Recommends.split(',').map((item)=>item.trim())
    if (obj.Enhances) this.enhancements = this.enhances = obj.Enhances.split(',').map((item)=>item.trim())
    if (obj['Pre-Depends']) this.suggestions = this.Suggests = obj['Pre-Depends'].split(',').map((item)=>item.trim())
    if (obj['Installed-Size']) this.installedSize = parseInt(obj['Installed-Size'], 10)
    if (obj.Author) this.author = obj.Author
    if (obj.Maintainer) this.maintainer = obj.Maintainer
    if (obj.Description) this.description = obj.Description
    if (obj.Depiction) this.depiction = obj.Depiction
    if (obj.Name) this.name = obj.Name
    if (obj.Tag) this.tag
    if (obj['Built-Using']) this.builtUsing = obj['Built-Using']

    if (obj.Filename) this.filename = obj.Filename
    if (obj.Size) this.size = parseInt(obj.Size, 10)
    if (obj.MD5Sum) this.md5 = obj.MD5Sum
    if (obj.SHA1) this.sha1 = obj.SHA1
    if (obj.SHA256) this.sha256 = obj.SHA256
  }
}

module.exports = Package