module.exports = (path) => {
  path = path.split("/");
  path.splice(path.length - 1, 1);
  return path.join("/") + "/";
};
