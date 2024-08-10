const youfile = require("youfile");
const { v4: uuidv4 } = require("uuid");
const envPaths = require("env-paths-ts");
const jconsole = require("@jumpcutking/console");
const toDir = require("./src/toDir");
const { join } = require("path");
function polish(path, name = "") {
  path = toDir(path);
  return [
    // src
    path,
    // name
    name && (name = name + "-"),
    // uuid
    uuidv4().split("-")[0],
    "/",
  ].join("");
}
class Cache {
  /**
   * Cache name.
   * @param {string} name - Directory path.
   */
  constructor(name) {
    this.path = polish(envPaths.default().cache, name);
    youfile.write.dir(this.path);

    //process exit
    process.on("exit", () => youfile.remove(this.path));
    jconsole.on("error", () => process.exit(0));
    process.on("SIGINT", () => process.exit(0));
  }
  /**
   * Clean the cache.
   */
  clear() {
    youfile.remove(this.path);
    youfile.write.dir(this.path);
  }
}
class Config {
  /**
   * Configuration name.
   * @param {string} name - Directory path.
   */
  constructor(name) {
    if (!name) {
      console.error("You must name the configuration.");
      process.exit(0);
    }
    this.path = join(toDir(envPaths.default().config), name);
    youfile.write.dir(this.path);
  }
  /**
   * Clean the confuguration.
   */
  clear() {
    youfile.remove(this.path);
    youfile.write.dir(this.path);
  }
}
module.exports = { Cache, Config };
