let listacontactos = ["FannyGomez", "RomelNieto", "OttoNieto",]


function agregarcontacto ( nuevocontacto){
    listacontactos.push(nuevocontacto)
return listacontactos
}
function borracontacto(conctatoaborrar){
    let nuevalista = listacontactos.filter((contacto)=>contacto !== conctatoaborrar);
listacontactos = nuevalista
}

function imprimircontacto(){
    console.log(listacontactos)
}

borracontacto("RomelNieto")
agregarcontacto("AndresNieto");
imprimircontacto ()
agregarcontacto("JordanCarrillo");
console.log(listacontactos)