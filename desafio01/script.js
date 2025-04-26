// capturando os ids
const myButton = document.querySelector('#mybutton');
const aviso = document.querySelector('#mensagem')
const body = document.body

//centralizando my button
myButton.style.position = "absolute";
myButton.style.top ="50%";
myButton.style.left = "50%";
myButton.style.transform =" translate(-50%, -50%)";

// centralizar h1
aviso.style.position = "absolute";
aviso.style.top ="20%";
aviso.style.left ="50%"
aviso.style.transform = "translate(-50%)";

//criando array de cores
const colors =["blue", "red", "yellow", "green", "grey", "purple", "pink", "orange", "black"]
let cor = 0

// colocando ação ao button
myButton.addEventListener('click', function() {
    const coloratual = colors[cor]
    body.style.backgroundColor= coloratual;
    aviso.textContent = "The background is: " + coloratual


    //logica do button de troca

    cor++
    if(cor >= coloratual.length) {
        cor = 0; //volta para o inicio
    }

})