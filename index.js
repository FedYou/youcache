const fs = require("fs");
const path = require("path");
const youfile = require("youfile");
const cachePath = require("./utils/cachePath");
module.exports = class YouCache {
  constructor(name) {
    if (typeof name !== "string")
      throw new Error("YouCache: name must be a string");
    this.path = cachePath(`${name}.node.cache`);
    youfile.write.dir(this.path);
  }
  async add(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    youfile.copy(filePath, pathCache);
    return pathCache;
  }
  async create(filePath, content) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    youfile.write.file(pathCache, content);
    return pathCache;
  }
  async createPath(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    return pathCache;
  }
  async createHash(filePath) {
    const hash = await youfile.get.sha256(filePath);
    return hash;
  }
  async get(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    if (youfile.exists(pathCache)) {
      return pathCache;
    } else {
      return null;
    }
  }
  getForHash(hash) {
    const pathCache = path.join(this.path, hash);
    if (youfile.exists(pathCache)) {
      return pathCache;
    } else {
      return null;
    }
  }
  async remove(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    youfile.removeExists(pathCache);
  }
  delete() {
    youfile.removeExists(this.path);
  }
  clear() {
    youfile.removeExists(this.path);
    youfile.write.dir(this.path);
  }
};
