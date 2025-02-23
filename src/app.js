/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  showRandomCard();

  setInterval(showRandomCard, 5000); //Intervalo de tiempo 5seg, para que se recargue la carta
};

// Función para generar carta aleatoria

function getRandomCard() {
  const numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const symbols = ["♦", "♥", "♠", "♣"];

  // Index aleatorio de número y simbolo
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  const randomSymbolIndex = Math.floor(Math.random() * symbols.length);

  // Condición ternario con los index del array symbols
  const randomSymbolColor = randomSymbolIndex <= 1 ? "red" : "black";

  // haciendo el return como un objeto
  return {
    symbol: symbols[randomSymbolIndex],
    color: randomSymbolColor,
    number: numbers[randomNumberIndex]
  };
}

// Funciòn para obtener una carta aleatoria y referencias a los elementos HTML donde se mostrará la carta

function showRandomCard() {
  const card = getRandomCard();

  //Obteniendo Elemntos del HTML
  const cardSymbolTopElement = document.getElementById("card-symbol-top");
  const cardNumber = document.getElementById("card-number");
  const cardSymbolBottomElement = document.getElementById("card-symbol-bottom");

  // Establezco el contenido de los elementos con el valor de los atributos de la carta, para actualizar el contenido en el HTML
  cardSymbolTopElement.innerHTML = card.symbol;
  cardSymbolTopElement.style.color = card.color;
  cardNumber.innerHTML = card.number;
  cardSymbolBottomElement.innerHTML = card.symbol;
  cardSymbolBottomElement.style.color = card.color;

  // Botón nueva carta
  const newCardButton = document.getElementById("get-new-card");
  newCardButton.onclick = showRandomCard;
}
