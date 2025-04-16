const mes = [
    { ordem: "Janeiro", dias: 31 },
    { ordem: "Fevereiro", dias: 28 },
    { ordem: "Março", dias: 31 },
    { ordem: "Abril", dias: 30 },
    { ordem: "Maio", dias: 31 },
    { ordem: "Junho", dias: 30 },
    { ordem: "Julho", dias: 31 },
    { ordem: "Agosto", dias: 31 },
    { ordem: "Setembro", dias: 30 },
    { ordem: "Outubro", dias: 31 },
    { ordem: "Novembro", dias: 30 },
    { ordem: "Dezembro", dias: 31 }
];

const feiras = [
    { ordem: "D" },
    { ordem: "S" },
    { ordem: "T" },
    { ordem: "Q" },
    { ordem: "Q" },
    { ordem: "S" },
    { ordem: "S" }
];

let indiceMesAtual = new Date().getMonth();
let anoAtual = new Date().getFullYear();

function gerarCalendario() {
    let headerCalendario = document.getElementById("headerCalendario");
    headerCalendario.innerHTML = "";

    let mesAtual = document.createElement('h1');
    mesAtual.textContent = `${mes[indiceMesAtual].ordem} ${anoAtual}`;

    let mesAnterior = document.createElement('button');
    mesAnterior.id = "mesAnterior";
    mesAnterior.className = "meses";
    mesAnterior.textContent = '<';
    mesAnterior.addEventListener('click', () => {
        indiceMesAtual--;
        if (indiceMesAtual < 0) {
            indiceMesAtual = 11;
            anoAtual--;
        }
        gerarCalendario();
    });

    let mesPosterior = document.createElement('button');
    mesPosterior.id = "mesPosterior";
    mesPosterior.className = "meses";
    mesPosterior.textContent = '>';
    mesPosterior.addEventListener('click', () => {
        indiceMesAtual++;
        if (indiceMesAtual > 11) {
            indiceMesAtual = 0;
            anoAtual++;
        }
        gerarCalendario();
    });

    headerCalendario.appendChild(mesAnterior);
    headerCalendario.appendChild(mesAtual);
    headerCalendario.appendChild(mesPosterior);

    let recheioCalendario = document.getElementById("recheioCalendario");
    recheioCalendario.innerHTML = '';

    let Categoria = document.createElement("div");
    Categoria.id = "categoria";

    for (let i = 0; i < feiras.length; i++) {
        let fFeiras = document.createElement("div");
        fFeiras.className = "feiras";
        fFeiras.textContent = feiras[i].ordem;
        Categoria.appendChild(fFeiras);
    }

    recheioCalendario.appendChild(Categoria);

    let dDias = document.createElement("div");
    dDias.id = "dias";

    // Verifica se é fevereiro e ano bissexto
    let diasNoMes = mes[indiceMesAtual].dias;
    if (indiceMesAtual === 1) {
        if ((anoAtual % 4 === 0 && anoAtual % 100 !== 0) || (anoAtual % 400 === 0)) {
            diasNoMes = 29;
        }
    }

    // Dia da semana que o mês começa (0 = domingo)
    const primeiroDia = new Date(anoAtual, indiceMesAtual, 1).getDay();

    // Dias do mês anterior
    let indiceMesAnterior = indiceMesAtual - 1;
    let anoAnterior = anoAtual;
    if (indiceMesAnterior < 0) {
        indiceMesAnterior = 11;
        anoAnterior--;
    }

    let diasMesAnterior = mes[indiceMesAnterior].dias;
    if (indiceMesAnterior === 1) {
        if ((anoAnterior % 4 === 0 && anoAnterior % 100 !== 0) || (anoAnterior % 400 === 0)) {
            diasMesAnterior = 29;
        }
    }

    for (let i = primeiroDia - 1; i >= 0; i--) {
        let diaAnterior = document.createElement("div");
        diaAnterior.className = "day foraDoMes";
        diaAnterior.textContent = diasMesAnterior - i;
        dDias.appendChild(diaAnterior);
    }

    // Dias do mês atual
    for (let i = 1; i <= diasNoMes; i++) {
        let day = document.createElement("div");
        day.className = "day";
        day.id = "QuadrinhoDia" + i;
        day.textContent = i;
        dDias.appendChild(day);
    }

    // Dias do próximo mês para completar a grade
    let totalDias = primeiroDia + diasNoMes;
    let diasExtras = 7 - (totalDias % 7);
    if (diasExtras < 7) {
        for (let i = 1; i <= diasExtras; i++) {
            let diaProximo = document.createElement("div");
            diaProximo.className = "day foraDoMes";
            diaProximo.textContent = i;
            dDias.appendChild(diaProximo);
        }
    }

    recheioCalendario.appendChild(dDias);
}

document.addEventListener("DOMContentLoaded", () => {
    gerarCalendario();
});
