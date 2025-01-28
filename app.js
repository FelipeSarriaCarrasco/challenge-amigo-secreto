// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let minimoParticipantes = 3;
const reg = new RegExp(/([0-9])|\W/g);




// funcion que se encarga de agregar los nombres de los amigos, al array.
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;
    (validaTexto(nombreAgregado)) == true ? listaAmigos.push(nombreAgregado) : alert('Debe ingresar un nombre válido');
    borrarinputs();
    listarAmigos('listaAmigos',nombreAgregado);
};


// funcion que sortea a los amigos seleccionados 
function sortearAmigo(){
    if (parseInt(listaAmigos.length) >= minimoParticipantes) {
        let ganador = document.getElementById('resultado');
        let numeroSorteo =  Math.floor(Math.random()*listaAmigos.length);
        ganador.innerHTML = listaAmigos[numeroSorteo];
        //console.log(listaAmigos[numeroSorteo]);
    }else{
        alert(`El numero minimo de participantes, es de ${minimoParticipantes} amigos, ${(parseInt(listaAmigos.length) === 1) ? `solo faltan ${Math.abs(listaAmigos.length - minimoParticipantes)} amigos más para iniciar el juego` : `solo falta ${Math.abs(listaAmigos.length - minimoParticipantes)} amigo más para inciar el juego` }`)
    };
};

// funcion revisa las expresiones regulare para determinar si el texto ingresado no es simbolo - espacios o numeros
function validaTexto(textoIngresado){
    if (reg.test(textoIngresado)) {
        return false
        //console. log(`Error codigo: ${textoIngresado} el error ${reg.test(textoIngresado)}`);
    }else if (!reg.test(textoIngresado)) {
        return true
        //console. log(`Codigo correcto: ${textoIngresado} esta bien ${reg.test(textoIngresado)}`);
    };
};

//funcion listar amigos inscritos
function listarAmigos(elemento, texto) {
    let elementoHTML = document.getElementById(elemento)
    elementoHTML.innerHTML += "<li>"+texto+"</>";
    return;
};

// Funcion se encarga de borrar el textbox del cuadro de Nonbre ingresado.
function borrarinputs(){
    document.querySelector('#amigo').value = '';
};

