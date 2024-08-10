# YouCache

Crea archivos temporales en el tiempo de ejecución del script y creación de configuraciones

> Si el entorno donde se ejecuta `new Cache(<name>)` es cerrado de repente sin previo aviso, el archivo temporal no se borrará.

> La configuración no se borrará al terminar la ejecución y podrá ser leída nuevamente

## Instalacion

### Module

```js
import { Config, Cache } from "youcache";
```

### Commonjs

```js
const { Config, Cache } = require("youcache");
```

### Uso

```js
const mycache = new Cache("<name>"); // El nombre no es obligatorio
const myconfig = new Config("<name>"); // El nombre es obligatorio
```

```js
const cache = new Cache("<name>");
const config = new Config("<name>");

// Ruta de la carpeta
console.log(cache.path);
console.log(config.path);
// Limpia el contenido de la carpeta
cache.clear();
config.clear();
```
