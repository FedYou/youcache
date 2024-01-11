# YouCache

<!-- Crea archivos temporales en el cache del dispositivo usando `env-paths-ts` para obtener los directorios en distintos sistemas operativos -->

Create temporary files in the device cache using `env-paths-ts` to get the directories on different operating systems

<!-- > [!WARNING]
> Si el entorno donde se ejecuta `youcache` es cerrado de repente sin previo aviso, el archivo temporal no se borrará -->

> [!WARNING]
> If the environment where `youcache` is running is suddenly shut down without warning, the temporary file will not be deleted.

<!--
> [!NOTE]
> `youcache` usa las mismas propiedades de `set`, `get` y `remove` de la libreria `youfile` -->

> [!NOTE] > `youcache` uses the same properties of `set`, `get` and `remove` from the library `youfile`.

## Use

### Module

```js
import { YCache } from "youcache";
```

### Commonjs

```js
const { YCache } = require("youcache");
```

### Initialize

```js
const mycache = new YCache("mycache-name");
```

## mycache.set

### Create File

```js
mycache.set(src, data);
```

<!-- > [!TIP]
> Si está trabando con `objetos` puedes poner directamente el `objeto` como dato del archivo `json` -->

> [!TIP]
> If you are working with `objects` you can put the `object` directly as data in the `json` file.

### Create Folder

<!-- Para crear una carpeta solo debes poner `false` en los datos -->

To create a folder you just have to put `false` in the data

```js
mycache.set(src, false);
```

## mycache.get

```js
mycache.get(src);
```

<!-- > [!NOTE]
> Al obtener los datos de un archivo con la extensión `.json` ya será un objeto -->

> [!NOTE]
> When obtaining data from a file with the extension `.json` it will already be an object

## mycache.remove

<!-- Elimina archivos y directorios -->

Deletes files and directories

```js
yfile.remove(src);
```
