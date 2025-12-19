document.addEventListener("DOMContentLoaded", () => {

    let puntuacion = 0;
    let terminado = false;
  
    const textoPuntuacion = document.getElementById("puntuacion") as HTMLParagraphElement;
    const imgCarta = document.getElementById("carta") as HTMLImageElement;
    const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;
    const botonPedir = document.getElementById("pedir") as HTMLButtonElement;
    const botonPlantarse = document.getElementById("plantarse") as HTMLButtonElement;
    const botonReiniciar = document.getElementById("reiniciar") as HTMLButtonElement;
  
    const mostrarPuntuacion = () => {
      textoPuntuacion.innerText = "Puntuación: " + puntuacion;
    };
  
    const dameCarta = (): number => {
      let numero = Math.floor(Math.random() * 10) + 1;
      if (numero > 7) numero += 2;
      return numero;
    };
  
    const mostrarCarta = (carta: number) => {
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/" +
        carta +
        "_copas.jpg";
    };
  
    const terminarJuego = () => {
      terminado = true;
      botonPedir.disabled = true;
      botonPlantarse.disabled = true;
      botonReiniciar.style.display = "inline";
    };
  
    botonPedir.addEventListener("click", () => {
      if (terminado) return;
  
      const carta = dameCarta();
      mostrarCarta(carta);
  
      if (carta >= 10) {
        puntuacion += 0.5;
      } else {
        puntuacion += carta;
      }
  
      mostrarPuntuacion();
  
      if (puntuacion > 7.5) {
        mensaje.innerText = "Game Over, te has pasado";
        terminarJuego();
      }
    });
  
    botonPlantarse.addEventListener("click", () => {
      if (puntuacion < 4) {
        mensaje.innerText = "Has sido muy conservador";
      } else if (puntuacion === 5) {
        mensaje.innerText = "Te ha entrado el canguelo";
      } else if (puntuacion < 7.5) {
        mensaje.innerText = "Casi casi...";
      } else {
        mensaje.innerText = "¡Lo has clavado!";
      }
      terminarJuego();
    });
  
    botonReiniciar.addEventListener("click", () => {
      puntuacion = 0;
      terminado = false;
      mensaje.innerText = "";
      mostrarPuntuacion();
      imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      botonPedir.disabled = false;
      botonPlantarse.disabled = false;
      botonReiniciar.style.display = "none";
    });
  
    mostrarPuntuacion();
  });
  

