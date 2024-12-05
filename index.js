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
  async add(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    await youfile.copy(filePath, pathCache)
    return pathCache
  }
  async create(filePath, content) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    await youfile.write.file(pathCache, content)
    return pathCache
  }
  async createPath(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    return pathCache
  }
  async createHash(filePath) {
    const hash = await youfile.get.sha256(filePath)
    return hash
  }
  async get(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    if (await youfile.exists(pathCache)) {
      return pathCache
    } else {
      return null
    }
  }
  getForHash(hash) {
    const pathCache = path.join(this.path, hash)
    if (youfile.existsSync(pathCache)) {
      return pathCache
    } else {
      return null
    }
  }
  async remove(filePath) {
    const hash = await youfile.get.sha256(filePath)
    const pathCache = path.join(this.path, hash)
    await youfile.removeExists(pathCache)
  }
  delete() {
    youfile.removeExistsSync(this.path)
  }
  clear() {
    youfile.removeExistsSync(this.path)
    youfile.write.dirSync(this.path)
  }
}
