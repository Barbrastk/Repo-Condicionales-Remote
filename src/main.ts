import './style.css';

let puntuacion = 0;

const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const obtenerCarta = (numeroAlea: number) => {
  if (numeroAlea > 7) {
    return numeroAlea + 2;
  }

  return numeroAlea;
}

const obtenerImagenCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
}

const mostrarUrlCarta = (url: string) => {
  const imgCarta = document.getElementById("carta");

  if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
    imgCarta.src = url;
  }
}

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
}

const sumarPuntos = (puntos: number) => {
  return puntuacion + puntos;
}

const actualizarPuntuacion = (nuevosPuntos: number) => {
  puntuacion = nuevosPuntos;
}

const comprobarPartida = () => {
  if (puntuacion === 7.5) {
    console.log('Enhorabuena, has ganado la partida');
  }

  if (puntuacion > 7.5) {
    console.log('Has perdido la partida, te has pasado');

    const btnPedir = document.getElementById("pedir");
  if (btnPedir instanceof HTMLButtonElement) {
    btnPedir.disabled = true;
   }
  }
};

const mostrarPuntuacionEnHTML = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion !== null && elementoPuntuacion !== undefined) {
    elementoPuntuacion.innerText = "Puntuación: " + puntuacion;
  }
}
  
const pedir = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerCarta(numeroAleatorio);
  const urlCarta = obtenerImagenCarta(carta);
  mostrarUrlCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);

  mostrarPuntuacionEnHTML();

  comprobarPartida();
}

const btnPedir = document.getElementById("pedir");

if (btnPedir !== null && btnPedir !== undefined && btnPedir instanceof HTMLButtonElement) {
  btnPedir.addEventListener('click', () => {
    pedir();
  });
}

const plantarse = () => {
  const elementoMensaje = document.getElementById("mensaje");

  if (elementoMensaje !== null && elementoMensaje !== undefined) {
    if (puntuacion < 4) {
      elementoMensaje.innerText = "Has sido muy conservador";
    } else if (puntuacion >= 4 && puntuacion <= 5) {
      elementoMensaje.innerText = "Te ha entrado el canguelo eh?";
    } else if (puntuacion >= 6 && puntuacion < 7.5) {
      elementoMensaje.innerText = "Casi casi...";
    } else if (puntuacion === 7.5) {
      elementoMensaje.innerText = "¡Lo has clavado! ¡Enhorabuena!";
    }
  }

  const btnPedir = document.getElementById("pedir");
if (btnPedir instanceof HTMLButtonElement) {
  btnPedir.disabled = true;
}
};

const btnPlantarse = document.getElementById("plantarse");

if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
  btnPlantarse.addEventListener('click', () => {
    plantarse();
  });
}

const reiniciarPartida = () => {
  actualizarPuntuacion(0);
  mostrarPuntuacionEnHTML();
  
  const urlReverso = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  mostrarUrlCarta(urlReverso);
  
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje !== null && elementoMensaje !== undefined) {
    elementoMensaje.innerText = "";
  }

  const btnPedir = document.getElementById("pedir");
  if (btnPedir instanceof HTMLButtonElement) {
    btnPedir.disabled = false;
  }

  const btnReiniciar = document.getElementById("reiniciar");
  if (btnReiniciar instanceof HTMLButtonElement) {
    btnReiniciar.style.display = "none";
  }
}

const btnReiniciar = document.getElementById("reiniciar");
if (btnReiniciar instanceof HTMLButtonElement) {
  btnReiniciar.addEventListener('click', () => {
    reiniciarPartida();
  });
}
