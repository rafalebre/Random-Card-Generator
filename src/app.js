/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♥", "♠", "♣", "♦"];
  let numbers = [
    "A",
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

  function loadCard() {
    var randomSuit = suits[Math.floor(Math.random() * suits.length)];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector(".suitsTop").innerHTML = randomSuit;
    document.querySelector(".number").innerHTML = randomNumber;
    document.querySelector(".suitsBottom").innerHTML = randomSuit;

    if (randomSuit == "♥" || randomSuit == "♦") {
      document.querySelector(".suitsTop").style.color = "red";
      document.querySelector(".suitsBottom").style.color = "red";
    }
  }
  loadCard();
};
