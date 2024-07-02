# YouCache

Crea archivos temporales en el tiempo de ejeción del script.

> Si el entorno donde se ejecuta `youcache` es cerrado de repente sin previo aviso, el archivo temporal no se borrará.

## Instalacion

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

Pon el un nombre que quieras a tu cache, puedes usar el mismio nombre tantas veces quieras.

## Manipulacion

`youcahe` usa la misma manara de manipulacion de archivos que [youfile](https://github.com/FedYou/youfile). Asi que ve a ver la documentacion de [youfile](https://github.com/FedYou/youfile) para saber como manipular los archivos.

No es necesario poner el path del cache al usar las funciones de `youfile` ya que eso lo hace automaticamente.

```js
let cache = new ycache("mycache");

cache.write.dir(cache.path + "folder"); // Esta es la forma incorecta.
cache.write.dir("folder"); // Esta es la forma corecta.

cache.read.dir.getAllFolders(); //Es nesesario escribir el nombre de una carpata para leer el directorio del cache.
```
