import { criarFooter } from "./../View/js/footer_view.js"
import { mostrarTelaInfos } from"./../Controller/informacoes/trocarTelaIf.js"

window.mostrarTelaInfos = mostrarTelaInfos;

document.addEventListener("DOMContentLoaded", () => {
    criarFooter();
})