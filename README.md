# YouCache

Creates a cache interface to your file system in an easy way.

> `youcache` does not return the contents of the cached files, it only returns their path and hash.

## Installation

### Module

```js
import YouCache from ``youcache`;
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

#### add

Adds a file to the cache, putting the contents of the file, returns an object with the path to the file in the cache and the hash of the file.

```js
await cache.add('file_path', 'content') // {hash,path}
```

#### create

Creates a new file path in the cache without creating any file, returns an object with the path to the file in the cache and the hash of the file.

```js
await cache.create('file_path') // {hash,path}
```

#### get

Returns an object with the path to the file in the cache and the hash of the file, if it does not exist it will return `null`.

```js
await cache.get('file_path') // {hash,path}
```

#### remove

Removes the file from the cache.

```js
await cache.remove('file_path')
```

#### clear

Clears the entire contents of the cache.

```js
await cache.clear()
```
