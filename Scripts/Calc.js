
/*--------Calcula hora de comida y de vigilancia de la puerta-------------*/
/*---------------------------Horarios generales----------------------------*/
/*
Los horarios generales es donde trabajan los 3 grupo 9:00->10:00->11:00
4 dias a la semana.
*/
function calcHours(tableHours) {
  let sumHoursDoor = ""//Sumador de la horas de la puerta.
  //Formato
  //hora entrada - hora comida - Hora puerta - hora salida - nombe Empl.
  for (let index = 0; index < tableHours.length; index++) {
    let hourDoor = "" //Auxiliar para la hora de puerta.
    if(sumHoursDoor === ""){
      hourDoor = "09:00" //Hora de comida
      sumHoursDoor = hourDoor
    }else{
      sumHoursDoor = sumHours(sumHoursDoor,"45")
    }
    hourDoor = sumHoursDoor
    let hoursBreakfast = "00:00"
    //Incrusta las hora de comida y la hora de puerta en medio del arreglo
    //Ver la API de este metodo.
    tableHours[index].splice(1,0,hoursBreakfast)
    tableHours[index].splice(2,0,hourDoor)
  }
  //Calculamos las horas de comida de un cierto grupo de empleados.
  let pivotHour = 3 //Representa el salto que debemos dar para calcular hora
  //de comida de los 3 empleados enteriores. -> Numero de Fila
  let lastHourBF = tableHours.length - 3//Ultimos tres empleados
  for (var i = 0; i < tableHours.length - 3; i++) {
    if(i !=0 && i % 3 == 0){
      let hoursBreakfast = tableHours[pivotHour][2]
      tableHours[lastHourBF][1] = hoursBreakfast
      lastHourBF++
      pivotHour+=3
    }
    let hoursBreakfast = tableHours[pivotHour][2]
    tableHours[i][1] = hoursBreakfast
  }

 formatTimetable(tableHours)

  return tableHours
}
