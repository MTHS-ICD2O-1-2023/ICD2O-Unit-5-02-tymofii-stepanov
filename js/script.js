// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2024
// This file contains the JS functions for index.html

"use strict";


function generateRandomNumber() {
  // Get the selected radio button
  var positiveChecked = document.getElementById('positive').checked;

  // Generate a random number
  let randomNumber;
  if (positiveChecked) {
    randomNumber = Math.floor(Math.random() * 6) + 1
  } else {
    randomNumber = -1 * (Math.floor(Math.random() * 6) + 1)
  }

  // Display the random number
  document.getElementById("randomNumber").innerHTML = "<p>Random Number: " + randomNumber + "</p>"
}
