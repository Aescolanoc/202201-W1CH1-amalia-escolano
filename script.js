const lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const questions = [[
  {letter: "a", answer: "anticuario", status: 0, question: ("Empieza por A: Persona que colecciona o negocia con antigüedades")},
  {letter: "b", answer: "biberon", status: 0, question: ("Empieza por B: Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma")},
  {letter: "c", answer: "capo", status: 0, question: ("Empieza por C: Jefe de la mafia, especialmente de narcotraficantes")},
  {letter: "d", answer: "desodorante", status: 0, question: ("Empieza por D: Producto que se utiliza para suprimir el olor corporal o de algún recinto")},
  {letter: "e", answer: "efímero", status: 0, question: ("Empieza por E: Pasajero, de corta duración")},
  {letter: "f", answer: "faja", status: 0, question: ("Empieza por F: Prenda interior elástica que ciñe la cintura, o la cintura y las caderas")},
  {letter: "g", answer: "gominola", status: 0, question: ("Empieza por G: Golosina blanca masticable, generalmente recubierta de azúcar")},
  {letter: "h", answer: "historia", status: 0, question: ("Empieza por H: Conjunto de todos los hechos ocurridos en tiempos pasados")},
  {letter: "i", answer: "iman", status: 0, question: ("Empieza por I: Objeto magnético que puede atraer al hierro y a otros metales.")},
  {letter: "j", answer: "judion", status: 0, question: ("Empieza por J: Variedad de judía de vainas anchas y semilla grande")},
  {letter: "l", answer: "linaje", status: 0, question: ("Empieza por L: Ascendencia o descendencia de una familia, especialmente noble")},
  {letter: "m", answer: "madriguera", status: 0, question: ("Empieza por M: Cueva en la que habitan ciertos animales, especialmente los conejos")},
  {letter: "n", answer: "navato", status: 0, question: ("Empieza por N: Espinazo de los vertebrados")},
  {letter: "ñ", answer: "acuñar", status:0, question: ("Contiene la Ñ: Hacer o fabricar moneda ")},
  {letter: "o", answer: "onírico", status: 0, question: ("Empieza por O: Perteneciente o relativo a los sueños")},
  {letter: "p", answer: "piolet", status: 0, question: ("Empieza por P: Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo")},
  {letter: "q", answer: "equilátero", status: 0, question: ("Contiene la Q: Triángulo que tiene todos sus lados iguales")},
  {letter: "r", answer: "risaralda", status: 0, question: ("Empieza por R: Departamento de Colombia con capital en la ciudad de Pereira")},
  {letter: "s", answer: "sentar", status: 0, question: ("Empieza por S: Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas")},
  {letter: "t", answer: "tipi", status: 0, question: ("Empieza por T:  Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte")},
  {letter: "u", answer: "unilateral", status: 0, question: ("Empieza por U: Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo")},
  {letter: "v", answer: "vilano", status: 0, question: ("Empieza por V: Flor del cardo")},
  {letter: "x", answer: "dux", status: 0, question: ("Contiene la X: En las repúblicas de Venecia o Génova, príncipe o magistrado supremo")},
  {letter: "y", answer: "ensayar", status: 0, question: ("Contiene la Y: Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público")},
  {letter: "z", answer: "zumbado", status: 0, question: ("Empieza por Z: Participio del verbo zumbar")},
], 
[
  {letter: "a", answer: "abecedario", status: 0, question: ("Empieza por A: Conjunto de las letras de un idioma puestas en orden.")},
  {letter: "b", answer: "babero", status: 0, question: ("Empieza por B: Tela que se pone a los bebés en el pecho para que no se manchen al comer.")},
  {letter: "c", answer: "cabeza", status: 0, question: ("Empieza por C: Parte superior del cuerpo que está sobre el cuello.")},
  {letter: "d", answer: "dormir", status: 0, question: ("Empieza por D: Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada.")},
  {letter: "e", answer: "elefante", status: 0, question: ("Empieza por E: Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas.")},
  {letter: "f", answer: "fiebre", status: 0, question: ("Empieza por F: Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos.")},
  {letter: "g", answer: "globo", status: 0, question: ("Empieza por G: Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda.")},
  {letter: "h", answer: "humo", status: 0, question: ("Empieza por H: Lo que sale cuando se hace un fuego.")},
  {letter: "i", answer: "iglesia", status: 0, question: ("Empieza por I: Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,...")},
  {letter: "j", answer: "jardin", status: 0, question: ("Empieza por J: Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles...")},
  {letter: "l", answer: "luna", status: 0, question: ("Empieza por L: Satélite de la Tierra, de color blanco, que se ve por la noche.")},
  {letter: "m", answer: "mantel", status: 0, question: ("Empieza por M: Tela que se pone en las mesas a la hora de comer.")},
  {letter: "n", answer: "nido", status: 0, question: ("Empieza por N: Tipo de casa que construyen los pájaros para poner sus huevos.")},
  {letter: "ñ", answer: "ñu", status:0, question: ("Contiene la Ñ: Mamífero africano de color marrón parecido a un toro con los cuernos curvos.")},
  {letter: "o", answer: "ojo", status: 0, question: ("Empieza por O: Órgano del sentido de la vista. Lo que usamos para ver.")},
  {letter: "p", answer: "peces", status: 0, question: ("Empieza por P: Animales que viven en el agua, cubiertos de escamas, con aletas para nadar.")},
  {letter: "q", answer: "queso", status: 0, question: ("Contiene la Q: Alimento de color amarillento que se fabrica con leche, y que se come en trozos, lonchas, en la pizza, rallado,...")},
  {letter: "r", answer: "rapido", status: 0, question: ("Empieza por R: Veloz.")},
  {letter: "s", answer: "sacapuntas", status: 0, question: ("Empieza por S: Lo que usas para que tus lápices tengan la punta afilada.")},
  {letter: "t", answer: "tenedor", status: 0, question: ("Empieza por T: Objeto que se usa para pinchar los alimentos y comérselos.")},
  {letter: "u", answer: "uña", status: 0, question: ("Empieza por U: Parte dura que está en la punta de los dedos, que cortamos cuando crece y que las mujeres se pintan a veces.")},
  {letter: "v", answer: "verano", status: 0, question: ("Empieza por V: Estación del año en la que hace mucho calor.")},
  {letter: "x", answer: "taxi", status: 0, question: ("Contiene la X: Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.")},
  {letter: "y", answer: "yate", status: 0, question: ("Empieza por Y: Barco de lujo.")},
  {letter: "z", answer: "zoo", status: 0, question: ("Empieza por Z: Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público.")},
],
[
  {letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
  {letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
  {letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
  {letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
  {letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
  {letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
  {letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
  {letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
  {letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
  {letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
  {letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
  {letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
  {letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
  {letter: "ñ", answer: "señal", status:0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
  {letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
  {letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
  {letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
  {letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
  {letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
  {letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
  {letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
  {letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
  {letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
  {letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
  {letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
]
];

let players = [];
let right = 0;
let wrong = 0;
let turn = 0;
let total;
let randomquestion;
let answer;
let playerQuestions = [];
let letterId = 0;
let letterStyle;
let currentPlayer = {};
let timer;
const TIMER_SECONDS = 150;
let timerTime = TIMER_SECONDS;

document.querySelector(".answer-verify").addEventListener("click", verifyAnswer, false);
document.querySelector(".start-button").addEventListener("click", starGame, false);
document.querySelector(".pass-button").addEventListener("click", pass, false);
document.querySelector(".end-game").addEventListener("click", leave, false);
document.querySelector(".player-name-button").addEventListener("click", savePlayerName, false);

generateLetters();

function generateLetters() { //genero los divs con las letras
  for (let i = 0; i < lettersArray.length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.className = "letter letter" + i;
    letterDiv.innerHTML = lettersArray[i];
    document.querySelector(".words").appendChild(letterDiv);
  }
}

function savePlayerName() { //guardamos el nombre del jugador
  document.querySelector(".ranking-wrapper").classList.add("hidden");
  currentPlayer.name = document.querySelector(".player-name").value.toUpperCase();
  if (!currentPlayer.name) {
    currentPlayer.name = "ANONYMOUS";
  }
  document.querySelector(".player-info").classList.add("hidden");
  document.querySelector(".question-panel").classList.remove("hidden");
  document.querySelector(".questions").classList.add("hidden");
  document.querySelector(".welcome-player").classList.remove("hidden");
  document.querySelector(".timer").innerHTML = timerTime;
  starButtonVisible()
}


function starGame() { //inicio del juego
  document.querySelector(".welcome-player").classList.add("hidden");
  document.querySelector(".questions").classList.remove("hidden");
  document.querySelector(".answer-verify").classList.remove("hidden");
  document.querySelector(".pass-button").classList.remove("hidden");
  document.querySelector(".end-game").classList.remove("hidden");
  document.querySelector(".start-button").classList.add("hidden");
  timer = setInterval(countDown, 1000);
  timerTime = TIMER_SECONDS;
  game();
}

function game() { //funcion principal
  if (letterId == 0 && turn == 0) {
    randomquestion = parseInt(Math.random() * 3);
    playerQuestions = questions[randomquestion];
  }
  document.getElementsByClassName("answer-input")[0].classList.remove("hidden");
  document.getElementsByClassName("right-answer")[0].classList.add("hidden");
  resetCurrentLetterStyle();
  
  if (playerQuestions[letterId].status == 0) {
    document.getElementsByClassName("question-text")[0].classList.remove("hidden");
    document.getElementsByClassName("question-text")[0].innerHTML = "";
    document.getElementsByClassName("question-text")[0].innerHTML = playerQuestions[letterId].question;
    letterStyle = document.getElementsByClassName("letter" + letterId)[0];
    document.querySelector(".letter" + letterId).classList.add("current-letter");
    document.getElementsByClassName('answer-input')[0].focus();
  } else {
    pass();
  }
}

function pass() { //Funcion para pasar palabra
  if (playerQuestions[letterId].status == 0) {
    letterId++;
    document.getElementsByClassName('answer-input')[0].value = "";
  } else {
    letterId++;
  }

  if (letterId >= playerQuestions.length) {
    turn++;
    letterId = 0;
  }

  game();
}

function countDown() { //contador de tiempo
  document.querySelector(".timer").innerHTML = timerTime - 1;
  timerTime--;
  if (timerTime <= 0) {
    document.querySelector(".question-text").innerHTML = "El tiempo se ha acabado."
    clearInterval(timer);
    endButtonVisible();
  }
}

function verifyAnswer() { //funcion para verificar la respuesta
  document.querySelector(".right-answer").innerHTML = "";
  answer = document.querySelector('.answer-input').value;
  answer = answer.toLowerCase();

  if (answer == playerQuestions[letterId].answer) {
    letterStyle = document.querySelector(".letter" + letterId);
    if (letterStyle){
      letterStyle.classList.add("green-letter");
    }
    right++;
    document.querySelector(".score-green").innerHTML = right;
  } else {
    letterStyle = document.querySelector(".letter" + letterId);
    if (letterStyle){
      letterStyle.classList.add("red-letter");
    }
    document.querySelector(".question-text").innerHTML = playerQuestions[letterId].question;
    document.querySelector(".right-answer").innerHTML = "La respuesta correcta es: " + playerQuestions[letterId].answer;
    setTimeout(() => {
      document.querySelector(".right-answer").classList.remove("hidden");
    }, 50);
    wrong++;
    document.querySelector(".score-red").innerHTML = wrong;

  }
  total = right + wrong;
  letterStyle.style.opacity = '1';
  playerQuestions[letterId].status = 1;
  document.querySelector('.answer-input').value = "";
  if (total === playerQuestions.length) {
    clearInterval(timer);
    endButtonVisible();
    resetCurrentLetterStyle();
    document.querySelector(".question-text").innerHTML = "HAS ACABADO. Pulsa 'Finalizar Juego' para ver el ranking";
    setTimeout(() => {
      document.querySelector(".right-answer").classList.add("hidden");
    }, 50);
  } else {
    pass();
  }
}

function resetStatus() { //Reseteamos valores para el proximo jugador
  questions.forEach(array => {
    array.forEach(element => {
      element.status = 0;
    });
  });

  right = 0;
  wrong = 0;
  total = 0;
  letterId = 0;
  playerQuestions = [];
  turn = 0;
  timerTime = TIMER_SECONDS;
  currentPlayer = {};
  resetCurrentLetterStyle();
  let allLetters = document.getElementsByClassName("letter");
  if (allLetters && allLetters.length){ 
    console.log(allLetters);
    for (let index = 0; index < allLetters.length; index++) {
      let element = allLetters[index];
      element.classList.remove("green-letter");
      element.classList.remove("red-letter");
    }
  }
  document.getElementsByClassName("right-answer")[0].innerHTML = "";
  document.getElementsByClassName("question-text")[0].innerHTML = "PREGUNTAS";
  document.getElementsByClassName("player-info")[0].classList.remove("hidden");
  document.getElementsByClassName("question-panel")[0].classList.add("hidden");
  document.getElementsByClassName("right-answer")[0].classList.add("hidden");
  document.getElementsByClassName("player-name")[0].value = "";
  document.getElementsByClassName("score-red")[0].innerHTML = "0";
  document.getElementsByClassName("score-green")[0].innerHTML = "0";
  document.getElementsByClassName("timer")[0].innerHTML = TIMER_SECONDS + "";
  clearInterval(timer);
}

function resetCurrentLetterStyle(){ //funcion para quitar el estilo css especial de la letra en uso
  let currentLetter = document.querySelector(".current-letter");
  if (currentLetter){
    currentLetter.classList.remove("current-letter");
  }
}

function generateRanking() { //Funcion para generar los divs con el ranking de jugadores
  document.getElementsByClassName("ranking-wrapper")[0].innerHTML = "### RANKING ###";
  for (let i = 0; i < players.length; i++) {
    let rankingDiv = document.createElement("div");
    rankingDiv.className = "ranking";
    rankingDiv.innerHTML = players[i].name + " - " + players[i].score + " PUNTOS";
    document.getElementsByClassName("ranking-wrapper")[0].appendChild(rankingDiv);
  }
}

function showRanking() { //funcion para mostrar el ranking
  currentPlayer.score = right;
  players.push(currentPlayer);
  players.sort((a, b) => b.score - a.score); //ordeno por puntuacion
  generateRanking();
  document.getElementsByClassName("ranking-wrapper")[0].classList.remove("hidden");
  document.getElementsByClassName("ranking-wrapper")[0].style.left = "30px";
}


function leave() { //funcion finalizar juego
  if (total === playerQuestions.length) {
    if (total != playerQuestions) {
      showRanking();
    }
  }
  starButtonVisible();
  resetStatus();
}

function endButtonVisible() { //funcion para dejar visible solo el boton finalizar juego
  document.getElementsByClassName("answer-verify")[0].classList.add("hidden");
  document.getElementsByClassName("pass-button")[0].classList.add("hidden");
  document.getElementsByClassName("end-game")[0].classList.remove("hidden");
  document.getElementsByClassName("start-button")[0].classList.add("hidden");
  document.getElementsByClassName("answer-input")[0].classList.add("hidden");
}

function starButtonVisible() { //funcion para dejar visible solo el boton empezar
  document.getElementsByClassName("answer-verify")[0].classList.add("hidden");
  document.getElementsByClassName("pass-button")[0].classList.add("hidden");
  document.getElementsByClassName("end-game")[0].classList.add("hidden");
  document.getElementsByClassName("start-button")[0].classList.remove("hidden");
}