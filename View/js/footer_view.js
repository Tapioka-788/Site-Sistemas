export function criarFooter() {
    let footer = document.getElementById('footer');

    let divFooter = document.createElement('div');
    divFooter.id = 'divFooter';

    // Lado direito do footer
    let divDir = document.createElement('div');
    divDir.id = 'divDir';
    divDir.className = "divLados";

    let divDirBtn = document.createElement('div');
    divDirBtn.id = 'divDirBtn';

    let botao1 = document.createElement('button');
    botao1.id = "botao1";
    botao1.className = "botoes";

    let botao2 = document.createElement('button');
    botao2.id = "botao2";
    botao2.className = "botoes";

    divDirBtn.appendChild(botao1);
    divDirBtn.appendChild(botao2);

    let email = document.createElement('h1');
    email.id = 'email';
    email.textContent = "Contact us: example@gmail.com";

    divDir.appendChild(email);
    divDir.appendChild(divDirBtn);

    // Lado esquerdo do footer
    let divEsq = document.createElement('div');
    divEsq.id = 'divEsq';
    divEsq.className = "divLados";

    let botaoAdm = document.createElement('button');
    botaoAdm.id = "botaoAdm";

    let iconeBotaoAdm = document.createElement('i');
    iconeBotaoAdm.id = "iconeBotaoAdm";

    botaoAdm.appendChild(iconeBotaoAdm);
    divEsq.appendChild(botaoAdm);

    divFooter.appendChild(divEsq);
    divFooter.appendChild(divDir);

    footer.appendChild(divFooter);

    console.log('Footer criado com sucesso!');
}


// divDir representa a div do lado direito
// divEsq representa a div do lado esquerdo

// divLados a classe que contem os mesmos caracteres em ambos os lados

// botaoAdm botao para acessar a area de moderador
// iBotaoAdm icone do botaoAdm
