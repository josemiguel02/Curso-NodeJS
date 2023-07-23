/*
  -====================================== Global Objects ======================================-
   Las siguientes variables están disponibles en todos los módulos.
    __dirname -> Nombre de directorio del módulo actual. Esto es lo mismo que el path.dirname()
    del __filename.

    __filename -> Nombre de archivo del módulo actual. Esta es la ruta absoluta del archivo de
    módulo actual con enlaces simbólicos resueltos.

    exports -> Una referencia a la que es más corta de escribir.
    module -> Una referencia al módulo actual.
    require() -> Se utiliza para importar módulos, y archivos locales.


  !NOTA: Sólo existen en el ámbito de los módulos (CommonJS/ESM).
*/

console.log(__dirname)
console.log(__filename)
console.log(exports)
console.log(module)
