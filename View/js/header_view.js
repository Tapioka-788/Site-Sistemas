import { btnsHeader } from "./../../Model/headerModel.js";

export function criarHeader() {
    let Sepheader = document.getElementById('header');
    // Sepheader é a Separacao Header

    let restHead = document.createElement('div');
    restHead.id = "restHead";

    // let menuHead = document.createElement('button');
    // menuHead.id = "menuHead";

    // let logo = document.createElement('img');
    let logo = document.createElement('div');
    logo.id = "logo";
    logo.textContent = "logo"

    let titulo = document.createElement('h1');
    titulo.id = "titulo";
    titulo.textContent = "titulo"

    // restHead.appendChild(menuHead)
    restHead.appendChild(logo)
    restHead.appendChild(titulo)

    let divBtns = document.createElement('div');
    divBtns.id = "divBtns";

    for (let i = 0; i < btnsHeader.length; i++) {
        let botao = document.createElement('button');
        botao.className = "botao";
        botao.addEventListener('click', () => {
            window.location.href = btnsHeader[i].destino;
        });

        let nomeBtn = document.createElement('h1');
        nomeBtn.className = 'nomesBtns';
        nomeBtn.textContent = btnsHeader[i].nome;

        let iconeBtn = document.createElement('h1');
        iconeBtn.className = 'iconesBtns';
        // iconeBtn.textContent = btnsHeader[i].icone;
        iconeBtn.textContent = "X";

        botao.appendChild(nomeBtn);
        botao.appendChild(iconeBtn)

        divBtns.appendChild(botao)

        console.log("for ta ok")
    }
    Sepheader.appendChild(restHead)
    Sepheader.appendChild(divBtns);
    console.log("funciona")
}
