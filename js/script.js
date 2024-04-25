
function generateRandomNumber() {
  // Get the selected radio button
  var positiveChecked = document.getElementById('positive').checked;

  // Generate a random number
  var randomNumber;
  if (positiveChecked) {
    randomNumber = Math.floor(Math.random() * 6) + 1; 
  } else {
    randomNumber = -1 * (Math.floor(Math.random() * 6) + 1);
  }

  // Display the random number
  document.getElementById("randomNumber").innerHTML = "<p>Random Number: " + randomNumber + "</p>";
}
