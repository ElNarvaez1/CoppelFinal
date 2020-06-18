
/**
  Copiara las filas de una tabla, copiara las filas en el rango que le digamos
  que ignore -> 2,6 en ese rango no copiara esas filas
  @param indexIn rango inicial
  @param indexFin rango Final
  @param table Tabla de donde copiaremos los valores.
  @return regresa un arreglo nuevo
*/
function copyRows(indexIn,indexFin,table) {
  let tableTemp = []

  for (let i = 0; i < indexIn; i++) {
    let arrayTemp = table[i].slice()
    tableTemp.push(arrayTemp)
  }
  for (var i = indexFin; i < table.length; i++) {
    let arrayTemp = table[i].slice()
    tableTemp.push(arrayTemp)
  }

  return tableTemp
}
