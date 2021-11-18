let pb = prompt("Ingrese la placa del bus")
let npt = Number(prompt("Ingrese el numero de pasajeros transportados"))
let r = prompt("Ingrese la ruta donde presto el servicio(A o B)")

if (r == 'a' || r == 'A') {
    dr = npt * 1200
} else {
    dr = npt * 1000
}

alert("El bus con placa " + pb + " recolecto un total de $" + dr)

