const { join } = require("path");
const os = require("os");
const process = require("process");

const homedir = os.homedir();
const { env } = process;

function macos(name) {
  const library = join(homedir, "Library");
  return join(library, "Caches", name);
}
function windows(name) {
  const localAppData = env.LOCALAPPDATA || join(homedir, "AppData", "Local");
  return join(localAppData, name, "Cache");
}
function linux(name) {
  return join(env.XDG_CACHE_HOME || join(homedir, ".cache"), name);
}

module.exports = (name) => {
  if (process.platform === "darwin") {
    return macos(name);
  }
  if (process.platform === "win32") {
    return windows(name);
  }
  return linux(name);
};
