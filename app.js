// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];




// funcion que se encarga de agregar los nombres de los amigos, al array.
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    listaAmigos.push(nombreAgregado);
    borrarinputs();
    console.log(listaAmigos);
};

// Funcion se encarga de borrar el textbox del cuadro de Nonbre ingresado.
function borrarinputs(){
    document.querySelector('#amigo').value = '';
};