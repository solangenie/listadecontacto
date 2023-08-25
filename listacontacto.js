let listacontactos = {
    id : 1,
    nombre: "solange",
    apellido: "nieto",
    telefono: 322000,
    ubicacion: { ciudad : "cucuta", direccion: "calle 3 #577888",}

}


    id : 2,{
    nombre: "romel",
    apellido: "nieto",
    telefono: 2566600,
    ubicacion: { ciudad : "medellin", direccion: "calle 26 #5888",}

    }

    id : 3,{
        nombre: "otto",
        apellido: "nieto",
        telefono: 8882222,
        ubicacion: { ciudad : "bucaramanga", direccion: "calle 2 #555 ",
    }
      }

function agregarcontacto ( nuevocontacto){
    listacontactos.push(nuevocontacto)

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