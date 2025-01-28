/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  showRandomCard();

  setInterval(showRandomCard, 10000);
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

// Botón para generar una nueva carta

function showRandomCard() {
  // obtengo una carta aleatoria
  const card = getRandomCard();

  // obtengo los elementos donde establecer los atributos de la carta
  const cardSymbolTopElement = document.getElementById("card-symbol-top");
  const cardNumber = document.getElementById("card-number");
  const cardSymbolBottomElement = document.getElementById("card-symbol-bottom");

  // establezco el contenido de los elementos con el valor de los atributos de la carta
  cardSymbolTopElement.innerText = card.symbol;
  cardSymbolTopElement.style.color = card.color;
  cardNumber.innerText = card.number;
  cardSymbolBottomElement.innerText = card.symbol;
  cardSymbolBottomElement.style.color = card.color;

  // escuchar evento onclick del botón
  const newCardButton = document.getElementById("get-new-card");
  newCardButton.onclick = showRandomCard;
}
