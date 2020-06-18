
/**
Usamos esta funcion para dar formato a las horas
en inicia un horario y termina otro
Ejemplo: 10:00 - 10:45
*/
function formatTimetable(tableHours) {
  //Esta seccion es solo para poder ver la hora de inicio y la hora en que
  //termina su comida.
  //Con la puerta haremos lo mismo
   //hora entrada - hora comida - Hora puerta - hora salida - nombe Empl.
  tableHours.forEach((row, i) => {
    let hourBreakfast = row[1]
    let sumMinutes = "120"
    if(row[0] == "11:00"){
      sumMinutes = "60"
    }
    hourBreakfast = hourBreakfast + " - " + sumHours(hourBreakfast,sumMinutes)
    row[1] = hourBreakfast

    //Formato de la hora de puerta.
    if(i<tableHours.length - 1){
      let hourDoorIn = row[2]//Hora de puerta Inicial.
      let hourDoorFin = tableHours[i+1][2]//Hora de puerta final.

      let finalHour  = hourDoorIn + " - " + hourDoorFin
      row[2] = finalHour;
    }else{
      row[2] = row[2]+" - 20:00"
    }

  });
}
