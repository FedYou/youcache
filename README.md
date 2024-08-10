# YouCache

Creates temporary files at script execution time and configuration time

> If the environment where `new Cache(<name>)` is executed is suddenly closed without warning, the temporary file will not be deleted.

> The configuration will not be deleted at the end of the run and can be read again.

## Instalation

### Module

```js
import { Config, Cache } from "youcache";
```

### Commonjs

```js
const { Config, Cache } = require("youcache");
```

### Use

```js
const mycache = new Cache("<name>"); // The name is not mandatory
const myconfig = new Config("<name>"); // The name is required
```

```js
const cache = new Cache("<name>");
const config = new Config("<name>");

// Folder path
console.log(cache.path);
console.log(config.path);
// Cleans the contents of the folder
cache.clear();
config.clear();
```
