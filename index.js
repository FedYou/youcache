const yfile = require("youfile");
const { v4: uuidv4 } = require("uuid");
const envPaths = require("env-paths-ts");
const jconsole = require("@jumpcutking/console");
const toDir = require("./src/toDir");

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

class YCache {
  /**
   * Cache name.
   * @param {string} name - Directory path.
   */
  constructor(name) {
    this.path = polish(envPaths.default().cache, name);
    yfile.write.dir(this.path);

    //process exit
    process.on("exit", () => yfile.remove(this.path));
    jconsole.on("error", () => process.exit(0));
    process.on("SIGINT", () => process.exit(0));
  }

  get write() {
    return {
      /**
       * Create a directory.
       * @param {string} path - Directory path.
       */
      dir: (path) => yfile.write.dir(this.path + path),
      /**
       * Create a file.
       * @param {string} path - File path.
       * @param {string} data - File contents.
       */
      file: (path, data) => yfile.write.file(this.path + path, data),
      /**
       * Create a file.
       * @param {string} path - File path.
       * @param {object} data - File contents.
       * @param {number} spaces - Number of formatting spaces in the json file, default is 0.
       */
      json: (path, data, spaces = 0) =>
        yfile.write.json(this.path + path, data, spaces),
    };
  }
  get read() {
    return {
      dir: {
        /**
         * Return all folders in the directory.
         * @param {string} path - Directory path.
         * @returns {Array<string>}
         */
        getFolders: (path = "") => yfile.read.dir.getFolders(this.path + path),
        /**
         * Return all files in the directory.
         * @param {string} path - Directory path.
         * @returns {Array<string>}
         */
        getFiles: (path = "") => yfile.read.dir.getFiles(this.path + path),
        /**
         * Returns all files in the directory with a specific extension.
         * @param {string} path - Directory path.
         * @param {string} extname - Extension to search.
         * @returns {Array<string>}
         */
        getFilesExtname: (path = "", extname) =>
          yfile.read.dir.getFilesExtname(this.path + path, extname),
      },
      /**
       * Returns the contents of the file as a string.
       * @param {string} path - File path.
       * @returns {string}
       */
      file: (path) => yfile.read.file(this.path + path),
      /**
       * Returns the contents of the file as a object.
       * @param {string} path - File path.
       * @returns {object}
       */
      json: (path) => yfile.read.json(this.path + path),
      /**
       * Returns the contents of the file in an object, uses json5 which allows reading json with comments.
       * @param {string} path - File path.
       * @returns {object}
       */
      json5: (path) => yfile.read.json5(this.path + path),
    };
  }
  /**
   * Copy files and directories.
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  copy(path, dest) {
    yfile.copy(this.path + path, dest);
  }
  /**
   * Move files and directories.
   * @param {string} path - Directory or file path.
   * @param {string} dest - Destination path of the directory or file.
   */
  move(path, dest) {
    yfile.copy(this.path + path, dest);
  }

  /**
   * Deletes files and directories.
   * @param {string} path - Directory or file path.
   */
  remove(path) {
    yfile.remove(this.path + path);
  }
}

module.exports = YCache;
