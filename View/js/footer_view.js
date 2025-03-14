import { btnsFooter } from "./../../Model/footerModel.js";
import { mostrarTelaInfos } from"./../../Controller/informacoes/trocarTelaIf.js"

export function criarFooter() {
    let SepFooter = document.getElementById('footer');

    let divFooter = document.createElement('div')
    divFooter.id = 'divFooter'

    let botaoIf = document.createElement('button');
    botaoIf.id = "botaoIf";
    botaoIf.className = "btnsFooter"
    botaoIf.textContent = "Infos"
    botaoIf.onclick = mostrarTelaInfos;

    let iconeI = document.createElement('i');
    // iconeI.classList = btnsFooter[i].iconeIf;
    iconeI.id = 'iconeI'

    let nomedes = document.createElement('h1');
    nomedes.textContent = 'Cema';
    nomedes.id = 'nomedes'

    let dinoSis = document.createElement('img')
    dinoSis.id = 'dinoSis'

    let botaoIc = document.createElement('button');
    botaoIc.id = "botaoIc";
    botaoIc.className = "btnsFooter"

    let iconeC = document.createElement('i');
    // iconeC.classList = btnsFooter[i].iconeIc;
    iconeC.id = 'iconeC'

    botaoIf.appendChild(iconeI);
    botaoIc.appendChild(iconeC);

    divFooter.appendChild(botaoIf);
    divFooter.appendChild(nomedes)
    divFooter.appendChild(dinoSis)
    divFooter.appendChild(botaoIc);

    SepFooter.appendChild(divFooter)

    console.log('Ta criando?')
}


// botaoIf = botao informacao;
// iconeI = icone informacao;
//
// nomedes = nome/descricao;
//
// dinoSis = dinossauro sistemas;
//
// botaoIc = botao configuracao;
// iconeC = icone configuracao;
//
// Sepfooter = Separacao Footer;
