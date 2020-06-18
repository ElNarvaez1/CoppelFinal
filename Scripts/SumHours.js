
/**
@param hourIn Hora inicial por ejemplo 10:50.
              ese es el formato que debe de seguir
@param minutesSume Los minutos que le sumaremos a esa hora.
@return Hora en formato 16:00
*/
function sumHours(hourIn,minutesSume) {
  let fractHours=hourIn.split(":"),
      hour = fractHours[0],
      minutes = fractHours[1]
  let minutesInt  = Number(fractHours[1]),
      minutesSumeInt =   Number(minutesSume),
      hourInt = Number(hour)
  if(minutesSumeInt % 60 == 0){
    let numberHour = minutesSumeInt / 60
    return (hourInt+numberHour)+":"+minutes
  }
  // if(minutesSumeInt == 60){
  // }
  let realMinutes = 0
  if(minutesInt+minutesSumeInt < 60){
    realMinutes = (minutesInt+minutesSumeInt)
  }else{
    realMinutes = (minutesInt+minutesSumeInt) - 60
    hourInt++
    //return hourInt+":"+((realMinutes<10)?"0"+realMinutes:realMinutes)
  }
  return hourInt+":"+((realMinutes<10)?"0"+realMinutes:realMinutes)
}
