// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const reg = new RegExp(/([0-9])|\W/g);




// funcion que se encarga de agregar los nombres de los amigos, al array.
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    validaTexto(nombreAgregado)
    (validaEntradasTexto(nombreAgregado) == true ? listaAmigos.push(nombreAgregado) : alert('Debe ingresar un nombre válido'));
    borrarinputs();
    console.log(listaAmigos);
};

// Funcion se encarga de borrar el textbox del cuadro de Nonbre ingresado.
function borrarinputs(){
    document.querySelector('#amigo').value = '';
};


// funcion revisa las expresiones regulare para determinar si el texto ingresado no es simbolo - espacios o numeros
function validaTexto(textoIngresado){
    let valorResultado = false
    if (reg.test(textoIngresado)) {
        return false
        //console. log(`Error codigo: ${textoIngresado} el error ${reg.test(textoIngresado)}`);
    }else if (!reg.test(textoIngresado)) {
        return true
        //console. log(`Codigo correcto: ${textoIngresado} esta bien ${reg.test(textoIngresado)}`);
    }
};

