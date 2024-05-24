// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2024
// This file contains the JS functions for index.html

"use strict";

function generateRandomNumber() {
  const positiveChecked = document.getElementById('positive').checked;


  let randomNumber;
  if (positiveChecked === true) {
    randomNumber = Math.floor(Math.random() * 6) + 1
  } else {
    randomNumber = -(Math.floor(Math.random() * 6) + 1)
  }


  document.getElementById("randomNumber").innerHTML = `<p>Random Number: ${randomNumber}</p>`
}
