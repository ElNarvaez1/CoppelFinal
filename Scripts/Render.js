
/*---------Crea una seccion con una tabla dentro -------------------*/
/*---------Para mostrar la informacion -------------------*/
function show(titleTimetable,timetable,pather) {
    let body=document.getElementById(pather)
    let section = document.createElement("section")
    section.className =  "container"
    section.classList.add("tables-hours")

    let titleTimetableElement = document.createElement("h2")
    titleTimetableElement.innerHTML = titleTimetable
    section.appendChild(titleTimetableElement)

    let table = document.createElement("table")
    section.appendChild(table)

    //Encabezado.de la tabla----------------------------------------------
    let trh = document.createElement("tr")
    //Encabezados de la tabla.
    let thTitles=["Hora de entrada.","Hora de comida.","Hora de puerta","Hora de Salida.","Empleado."]

    thTitles.forEach((element, i) => {
        let th = document.createElement("th")
        th.innerHTML = element
        trh.appendChild(th)
    });
    table.appendChild(trh);
    // fin Encabezado.------------------------------------------------
    for (let i = 0; i < timetable.length; i++) {
      //Creamos un fila para la tabla.
      let tr=document.createElement("tr")
      //Agregamos los datos a las filas de la tablas
      for (let indexData = 0; indexData < timetable[i].length; indexData++) {
        let td = document.createElement("td")
        td.innerHTML = timetable[i][indexData];
        tr.appendChild(td)
      }
      table.appendChild(tr)
    }
    body.appendChild(section)
}
