let fs = require("fs-extra");
let yfile = require("youfile");
let { v4: uuidv4 } = require("uuid");
let envPaths = require("env-paths-ts");
let jconsole = require("@jumpcutking/console");

function toDir(src) {
  src = src.split("/");
  src.splice(src.length - 1, 1);
  return src.join("/") + "/";
}
function polish(src, name = "") {
  src = toDir(src);
  return [
    // src
    src,
    // name
    name && (name = name + "-"),
    // uuid
    uuidv4().split("-")[0],
    "/",
  ].join("");
}

class YCache {
  constructor(name) {
    this.path = polish(envPaths.default().cache, name);
    fs.mkdirSync(this.path);

    //process exit
    process.on("exit", () => fs.removeSync(this.path));
    jconsole.on("error", () => process.exit(0));
    process.on("SIGINT", () => process.exit(0));
  }
  set(src, data) {
    yfile.set(this.path + src, data);
  }
  get(src) {
    return yfile.get(this.path + src);
  }
  remove(src) {
    yfile.remove(this.path + src);
  }
}

module.exports = { YCache };
