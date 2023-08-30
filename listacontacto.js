let listacontactos = [{
    id : 1,
    nombre: "solange",
    apellido: "nieto",
    telefono: 322000,
    ubicacion: { ciudad : "cucuta", direccion: "calle 3 #577888",}

},

{
    id : 2,
    nombre: "romel",
    apellido: "nieto",
    telefono: 2566600,
    ubicacion: { ciudad : "medellin", direccion: "calle 26 #5888",}

    },
];

function agregarcontacto ( nuevocontacto){
    listacontactos.push(nuevocontacto)

}
function borracontacto(conctatoaborrar){
    let nuevalista = listacontactos.filter((contacto) => contacto.id !== conctatoaborrar);
listacontactos = nuevalista
}



function imprimircontacto(){
    console.log(listacontactos)
}
let nuevocontacto= 
{
   id: 3,
       nombre: "otto",
       apellido: "nieto",
       
       telefono: 8882222,
       ubicacion: { ciudad : "bucaramanga", direccion: "calle 2 #555 ",
    }
 }



agregarcontacto(nuevocontacto);
imprimircontacto();
borracontacto(1);
imprimircontacto();
//agregarcontacto("");
//console.log(listacontactos);
