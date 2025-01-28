// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];




// funcion que se encarga de agregar los nombres de los amigos, al array.
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    (validaEntradasTexto(nombreAgregado) == true ? listaAmigos.push(nombreAgregado) : alert('Debe ingresar un nombre válido'));
    borrarinputs();
    console.log(listaAmigos);
};

// Funcion se encarga de borrar el textbox del cuadro de Nonbre ingresado.
function borrarinputs(){
    document.querySelector('#amigo').value = '';
};


// funcion se encarga de verificar los caracteres del texto ingresado mediante el valor ASCII que posee cada valor
function validaEntradasTexto(textoIngresado){
    let valorResultado = false
    for (let tx = 0; tx < textoIngresado.length; tx++) {
        let elemento = textoIngresado.charAt(tx); // se extare cada caracter de izquierda a derecha

        // charCodeAt() devuelve el valor ASCII del caracter
        // los numeros ASCII entre el 65 y 90 corresponden a las letras Mayusculas
        // los numero ASCII entre el 97 y 122 corresponden a las letras Minusculas
        if (elemento.charCodeAt(0) >= 65 && elemento.charCodeAt(0) <= 90) {
            valorResultado = true
        }else if (elemento.charCodeAt(0) >= 97 && elemento.charCodeAt(0) <= 122) {
            valorResultado = true
        }else{
            return false
        }
    }
    return valorResultado;
};

