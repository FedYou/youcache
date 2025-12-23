const youfile = require('youfile')
const cachePath = require('./utils/cachePath')

module.exports = class YouCache {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('YouCache: name must be a string')
    }
    this.path = cachePath(`${name}.node.cache`)
    youfile.write.dirSync(this.path)
  }

  async clear() {
    await youfile.removeExists(this.path)
    await youfile.write.dir(this.path)
  }

  clearSync() {
    youfile.removeExistsSync(this.path)
    youfile.write.dir(this.path)
  }
}
