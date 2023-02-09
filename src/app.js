/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#testing").innerHTML = cardGenerator();
};
let cardGenerator = function() {
  let cardNumber = [
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
  let cardNumberSelect = Math.floor(Math.random() * cardNumber.length);
  let cardSuits = ["♦", "♥", "♠", "♣"];

  let cardSuitsSelect = Math.floor(Math.random() * cardSuits.length);

  return cardNumber[cardNumberSelect] + cardSuits[cardSuitsSelect];
};
