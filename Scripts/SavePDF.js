/*-------Gnera el PDF para guardar los orarios -----------------*/
function getPDFTables() {
    console.log("cdbsadcbsdbv2");
    let tables = document.getElementById('tables')
    console.log(tables);
    if(tables.children.length===0){
      alert("Porfavor primero genera los Horarios :D")
      return;
    }

    let pdfDoc = new jsPDF();
    pdfDoc.setFontSize(10)
    pdfDoc.fromHTML(tables,5,5);
    pdfDoc.save("Horarios.pdf")
}
