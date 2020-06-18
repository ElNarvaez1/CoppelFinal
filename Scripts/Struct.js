
/*-----------Crea la estructura basica de tabala -------------*/
/*----------Hora entrada, hora salida, Nombre empleado-------------------*/
function struct() {
  let rows=document.getElementsByClassName('row')
  let rowsHours = new Array()

  /*______Primera parte del codigo_________*/
  for (let index = 0; index < rows.length; index++) {
    let rowTemp=new Array()
    let childsRow=rows[index].children
    //Agregamos la hora de entrada.
    if(index < 5){
        rowTemp.push("09:00")
    }else if (index >= 5 && index < 10){
        rowTemp.push("10:00")
    }else if(index>=10){
        rowTemp.push("11:00")
    }
    //Agregamos la hora de salida
    rowTemp.push(hourExit)
    let employee=childsRow[0].value
    //Verificamos que el nombre del empleado no este vacio
    if(employee === ""){
      //employee="Empleado: "+(index+1);
      childsRow[0].parentNode.classList.add('error')
      return null;
    }else{
      childsRow[0].parentNode.classList.remove('error')
    }

    //Agregamos al empleado a la tabla
    rowTemp.push(employee)
    //Agregamos la fila al conjunto de filas de horas(tabla)
    rowsHours.push(rowTemp)
  }
  //Ordenamos la tabla
  //JS lo va a ordenar por el primer elemento de cada fila
  //Con esto buscamos ordenar por el empleado que entra mas temprano al
  //que entra mas tarde.
  rowsHours.sort()
  //console.log(rowsHours)
  return rowsHours

}
