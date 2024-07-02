# YouCache

Creates temporary files at script execution time.

> If the environment where `youcache` is running is suddenly shut down without warning, the temporary file will not be deleted.

## Installation

### Module

```js
import Ycache from "youcache";
```

### Commonjs

```js
const Ycache = require("youcache");
```

### Uso

```js
const mycache = new Ycache("mycache");
```

Give your cache a name of your choice, you can use the same name as many times as you want.

## Manipulation

youcahe` uses the same way of file manipulation as [youfile](https://github.com/FedYou/youfile). So see the documentation of [youfile](https://github.com/FedYou/youfile) to know how to manipulate the files.

It is not necessary to set the cache path when using the `youfile` functions as that is done automatically.

```js
let cache = new ycache("mycache");

cache.write.dir(cache.path + "folder"); // This is the wrong way.
cache.write.dir("folder"); // This is the correct form.

cache.read.dir.getAllFolders(); //It is necessary to write the name of a folder to read the cache directory.
```
