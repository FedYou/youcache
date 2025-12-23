# YouCache

Easily create a cache path for your file system

## Installation

### Module

```js
import YouCache from 'youcache'
```

### Commonjs

```js
const YouCache = require('youcache')
```

## Usage

Create a new instance.

```js
const cache = new YouCache('my-cache') // The name is required.
```

#### path

Returns the path of the cache on the device.

```js
console.log(cache.path)
```

#### clear

Clears the entire contents of the cache.

```js
await cache.clear()
```

or

```js
cache.clearSync()
```
