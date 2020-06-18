
/**
  Calcula las horas de los empleados que trbajan los viernes, mientr
  otro grupo (9:00) descanza ese dia.
  @param indexIn rango inferior del indice que se ignorara de la tabla
  @param indexFin rango superior del indice que se ignorara de la tabla
  @param timetable Tabla de los horarios, estos horarios seran copiados es
                    decir que la tabla original o se altera.
  @param flag2 true -> Domingo
              false -> otro dia
  @return tabla con los horios de los trbajadores.
*/
function calcHoursFree(indexIn,indexFin,timetable,flag2) {
  let newTimetable = copyRows(indexIn,indexFin,timetable)
  //hora entrada - hora comida - Hora puerta - hora salida - nombe Empl.
  let hourBreakfast = "11:00"
  let hourDoor = "10:00"
  let flag = true;

  for (var i = 0; i < newTimetable.length; i++) {
    newTimetable[i][1] = hourBreakfast
    newTimetable[i][2] = hourDoor
    if(i >= (newTimetable.length / 2) - 1 && flag){
       hourBreakfast = "11:00"
       if(flag2){
         hourBreakfast = "10:00"
       }
       flag = false;
    }
    hourBreakfast = sumHours(hourBreakfast,60)
    hourDoor = sumHours(hourDoor,60)
  }

 formatTimetable(newTimetable)

  return newTimetable
}
