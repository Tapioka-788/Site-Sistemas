export function moverDino() {
    const dino = document.getElementById("dino");
    const texto = document.getElementById("texto");
    console.log("resgatou")
  
    dino.style.animation = "none";
    texto.style.animation = "none";

    void dino.offsetWidth;
  
    dino.style.animation = "moveDino 2s";
  
    const textoCorAtual = window.getComputedStyle(texto).color;
  
    if (textoCorAtual === "rgb(0, 0, 0)") {
      texto.style.color = "white";
    } else if (textoCorAtual === "rgb(255, 255, 255)") {
      texto.style.color = "black";
    }
    console.log("rodou")
  }