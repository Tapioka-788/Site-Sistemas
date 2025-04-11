export function moverDino() {
  const dino = document.getElementById("dino");
  const texto = document.getElementById("texto");
  const textoOriginal = "Técnico em Desenvolvimento de Sistemas - Cema";

  dino.style.animation = "none";
  texto.style.animation = "none";

  void dino.offsetWidth;
  void texto.offsetWidth;

  dino.style.animation = "moveDino 3000ms ease-in-out";

  texto.style.animation = "white 0.7s ease-in-out forwards";

  setTimeout(() => {
    texto.textContent = "3° Desenvolvimento de Sistemas";
    texto.style.animation = "black 0.7s ease-in-out forwards";
  }, 1000);

  setTimeout(() => {
    texto.style.animation = "white 0.7s ease-in-out forwards";
  }, 2000);

  setTimeout(() => {
    texto.textContent = textoOriginal;
    texto.style.animation = "black 0.7s ease-in-out forwards";
  }, 2700);
}

import { headerBtns } from './../../Model/headerModel.js';

export function criarHeader() {
  let header = document.getElementById('header');
  console.log("Resgatou o header");
  let divEsq = document.createElement('div');
  divEsq.id = "esquerda";

  let dinoImg = document.createElement('img');
  dinoImg.src = "./../../Model/icone_dino.png";
  dinoImg.alt = "Dino";
  dinoImg.id = "dino";
  dinoImg.onclick = moverDino;

  let textoEsq = document.createElement('h1');
  textoEsq.id = "texto";
  textoEsq.textContent = "Técnico em Desenvolvimento de Sistemas - Cema";

  divEsq.appendChild(dinoImg);
  divEsq.appendChild(textoEsq);

  console.log("Criou a esqurda");

  let divDir = document.createElement('div');
  divDir.id = "direita";

  for (let i = 0; i < headerBtns.length; i++) {
    let button = document.createElement('button');
    button.className = 'botoes';

    //vai pra tela responsavel
    button.addEventListener('click', () => {
      window.location.href = headerBtns[i].caminho;
    });

    //texto
    let h3 = document.createElement('h3');
    h3.className = 'textBTN';
    h3.textContent = headerBtns[i].texto;

    //icone
    let ic = document.createElement('i');
    ic.classList = headerBtns[i].icon;

    button.appendChild(h3);
    button.appendChild(ic);

    divDir.appendChild(button);
  }
  console.log("Criou a direita");

  header.appendChild(divEsq);
  header.appendChild(divDir);
}




{/* <header id="header">
<div id="esquerda">
    <div id="dino" onclick="moverDino()"></div>
    <h1 id="texto">Técnico em Desenvolvimento de Sistemas - Cema</h1>
</div>
<div id="direita">
    <button class="botoes">
        <h1 class="textBTN">Agendas</h1>
        <i class="iconBTN">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="#ffffff"
                    d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
            </svg>
        </i>
    </button>
    <button class="botoes">
        <h1 class="textBTN">Home</h1>
        <i class="iconBTN" class="fa-solid fa-house">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path fill="#ffffff"
                    d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
        </i>
    </button>
</div>

</header> */}
