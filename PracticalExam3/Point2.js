
let tt = prompt("Ingrese el tipo de trabajador(FIJO o TEMPORAL)")

if(tt == 'FIJO'){
    let nm = prompt("Ingrese el nombre del trabajador")
    let nht =Number(prompt("Ingrese el numero de horas trabajadas") )
    let sbh = Number(prompt("Ingrese el valor de Salario Basico Hora"))
    let dd = Number(prompt("Ingrese el total de deducciones"))
    let bn = Number(prompt("Ingrese el total de bonificaciones"))

    sn = nht * sbh + bn - dd

    alert("Nombre: " + nm + "\n" + "Salario Neto: " + sn)
}else{
    let nm = prompt("Ingrese el nombre del trabajador")
    let nht = Number(prompt("Ingrese el numero de horas trabajadas"))

    sn = nht * 6000

    alert("Nombre: " + nm + "\n" + "Salario Neto: " + sn)

}
