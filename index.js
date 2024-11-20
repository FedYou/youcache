const fs = require("fs");
const path = require("path");
const youfile = require("youfile");
const cachePath = require("./utils/cachePath");
module.exports = class YouCache {
  constructor(name) {
    if (typeof name !== "string")
      throw new Error("YouCache: name must be a string");

    this.path = cachePath(name);
    youfile.write.dir(this.path);
  }
  async add(filePath, content) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    youfile.write.file(pathCache, content);
  }
  async addForPath(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    return pathCache;
  }
  async remove(filePath) {
    const hash = await youfile.get.sha256(filePath);
    const pathCache = path.join(this.path, hash);
    youfile.removeExists(pathCache);
  }
  async getForPath(filePath) {
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
  async getHash(filePath) {
    const hash = await youfile.get.sha256(filePath);
    return hash;
  }
  delete() {
    youfile.removeExists(this.path);
  }
  clear() {
    youfile.removeExists(this.path);
    youfile.write.dir(this.path);
  }
};
