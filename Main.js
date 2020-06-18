// Hora de salida
//Se supone que todos los empleados salen a esta hora
const hourExit = "20:00"

//Esta seccion se ejecuta una vez que toda la pagina carga.
document.addEventListener("DOMContentLoaded",e=>{
  let buttonGenerar = document.getElementById('buttonGenerar')
  // buttonGenerar.addEventListener("click",struct);
  buttonGenerar.addEventListener("click",()=>{
    //Nos asegurmao que no exista tabalas previas
     let containerTables=document.getElementById("tables")
     if(containerTables){
       document.body.removeChild(containerTables)
       let newTables = document.createElement("section")
       newTables.className =  "container"
       newTables.id = "tables"
       document.body.appendChild(newTables)
     }

    let timetable = struct()
    if(timetable==null){
      alert("No dejes campos vacios.")
      return
    }

    //------- Horarios finales. --------------
    let timettableWeek = calcHours(timetable)//Horas de 4 dias en los que los 3 grupos estan juntos.
    show("Horarios Lunes, Martes, Miercoles y Jueves.",timettableWeek,"tables")

    let hoursFriday = calcHoursFree(0,5,timetable,false)
    show("Horarios Viernes.",hoursFriday,"tables")

    let hoursSaturday = calcHoursFree(5,10,timetable,false)
    show("Horarios Sabados.",hoursSaturday,"tables")

    let hoursSunday = calcHoursFree(10,15,timetable,true)
    show("Horarios Domingos.",hoursSaturday,"tables")

    alert("Baja el scroll :D")
  });

  let saveButton=document.getElementById('gurdar')
  saveButton.addEventListener("click",getPDFTables)

})


/*-----------------------------------------------------------------------------------*/
//Esta funcion no se usa en esta pagina web,
//Es una funcion que se usaba en la anteriro version.
function clear(tableHours) {
  for (let rowIn = 0; rowIn < tableHours.length-1; rowIn++) {
    let row=tableHours[rowIn]
    let rowNext=tableHours[rowIn+1]

    if(rowNext.length>2){
      if(rowNext[0]===row[0]){
        rowNext.shift()
      }
    }else if(row.length>2){
      if(rowNext[0]===row[0]){
        row.shift()
      }
    }
    tableHours.sort()
  }
}
