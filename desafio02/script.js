// 1 adicionando IDS
const display = document.querySelector("#Resultado");
const controls = document.querySelector("#buttons");

// 2 colocando um button do lado do outro 
const nav = document.createElement('div');
nav.style.display = 'flex';
nav.style.gap = '10px';
nav.style.margin = '20px';

const botao1 = document.createElement('button');
botao1.textContent = 'Diminuir';

const botao2 = document.createElement('button');
botao2.textContent = 'Zerar';

const botao3 = document.createElement('button');
botao3.textContent = 'Aumentar'

nav.appendChild(botao1);
nav.appendChild(botao2);
nav.appendChild(botao3);


// 3 colocando buttons pelo js na tela do html 
controls.appendChild(nav);

// 4 configurando o display

display.style.color = 'green';
display.textContent = '0';
display.style.fontSize = '40px';
display.style.marginBottom = '20px';

// 5 logica de buttons

let contador = 0;
display.textContent = contador;

botao1.onclick = () => {
    contador--;
    display.textContent = contador;
};

botao2.onclick = () => {
    contador = 0;
    display.textContent = contador;
};

botao3.onclick = () => {
    contador++;
    display.textContent = contador;
}

// 6 deixar tudo no centro da tela
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';

