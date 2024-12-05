const path = require('path')
const youfile = require('youfile')
const cachePath = require('./utils/cachePath')
module.exports = class YouCache {
  constructor(name) {
    if (typeof name !== 'string')
      throw new Error('YouCache: name must be a string')
    this.path = cachePath(`${name}.node.cache`)
    youfile.write.dirSync(this.path)
  }
  async add(filePath, content) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    await youfile.write.file(pathCache, content)
    return { hash, path: pathCache }
  }
  async get(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    if (await youfile.exists(pathCache)) {
      return { hash, path: pathCache }
    } else {
      return null
    }
  }
  async create(filePath) {
    const hash = await youfile.get.sha256(filePath)
    return { hash, path: path.join(this.path, hash) }
  }
  async remove(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    await youfile.removeExists(pathCache)
  }
  async clear() {
    await youfile.removeExists(this.path)
    await youfile.write.dir(this.path)
  }
}
