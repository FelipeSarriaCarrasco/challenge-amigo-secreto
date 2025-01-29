<h1 align="center">Hola 👋, soy Felipe Sarria</h1>
<h3 align="center">PROYECTO JUEGO AMIGO SECRETO</h3>

 <h3 align="center"><a align="center" href="https://aluracursos.com"><img align="center" src="https://github.com/user-attachments/assets/e8ac3be6-b98c-4769-9c47-f27386205ebb"/></a></h3>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


- 🔭 Esta aplicación web permite agregar amigos para un juego aleatorio seleccionando a un ganador. Los participantes son ingresados y almacenados en un listado. Que posteriormente, una función de selección aleatoria elige a uno de los participantes como ganador. [challenge-amigo-secreto](https://github.com/FelipeSarriaCarrasco/challenge-amigo-secreto)

## Características

- **Agregar Amigos**: El usuario puede ingresar un minimo de 3 amigos a la lista de participantes.
- **Sorteo Aleatorio**: Después de añadir a los amigos, un sorteo aleatorio seleccionara un ganador.
- **Interfaz Simple**: Interfaz web intuitiva para facilitar la adición de participantes y realizar el sorteo.
- **Listar Participantes**: Los participantes son visualizados en una lista antes de realizar el sorteo.

## Instalación

Para probar esta aplicación de manera local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local:
   
   ```bash
   git clone https://github.com/FelipeSarriaCarrasco/challenge-amigo-secreto.git

## Uso
1. En la página principal, ingresa el nombre del participante en el campo de texto "Escribre un nombre".
2. Haz clic en el botón "Añadir" para añadir al participante a la lista.
3. Una vez que hayas agregado todos los participantes, haz clic en el botón "Sortear amigo".
4. El sistema seleccionará aleatoriamente a un ganador y lo mostrará en pantalla.

## Código Lógica del Sorteo
A continuación, fragmento básico de JavaScript utilizado para el sorteo aleatorio:

- **función se encarga de agregar los nombres de los amigos y almacenarlos en una colección.**
  
  ```bash
  let listaAmigos = [];
  let minimoParticipantes = 3;
  const reg = new RegExp(/([0-9])|\W/g); // expresion regular que busca inclur a datos numericos, espacios y simbolos
  
  // funcion que se encarga de agregar los nombres de los amigos, al array.
  function agregarAmigo(){
      let nombreAgregado = document.getElementById('amigo').value;
      (validaTexto(nombreAgregado)) == true ? listaAmigos.push(nombreAgregado) : alert('Debe ingresar un nombre válido');
      borrarinputs();
      listarAmigos('listaAmigos',nombreAgregado);
  };
  ```
- **Función sortea a los amigos seleccionados**
  
  ```bash
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
  ```
- **función revisa las expresiones regulares, para determinar si el texto ingresado no es símbolo - espacios o números**
  
  ```bash
  function validaTexto(textoIngresado){
      if (reg.test(textoIngresado)) {
          return false
          //console. log(`Error codigo: ${textoIngresado} el error ${reg.test(textoIngresado)}`);
      }else if (!reg.test(textoIngresado)) {
          return true
          //console. log(`Codigo correcto: ${textoIngresado} esta bien ${reg.test(textoIngresado)}`);
      };
  };
  ```
<h3 align="left">Conéctate conmigo:</h3>
<p align="left">
<a href="https://linkedin.com/in/felipe-s-carrasco" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="www.linkedin.com/in/felipe-s-carrasco" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/22391594/felipe-sarria-carrasco" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="felipe sarria carrasco" height="30" width="40" /></a>
</p>

<h3 align="left">herramientas:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/es-ES/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=felipesarriacarrasco&show_icons=true&locale=es&layout=compact" alt="felipesarriacarrasco" /></p>




