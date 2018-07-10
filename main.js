var numSquares = 6;
var colors = []; //we have reset() at the begining that will run generateRandomColors(numSquares)
var pickedColor //we have reset() at the begining that will run pickColor()
// var colors = generateRandomColors(numSquares);
// var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// last created function that initialize the code at the beggining

function init(){
   modeButtonsListeners();
   squaresListeners();
   reset();
}

function modeButtonsListeners(){
   // Setup Mode buttons event listeners
   for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
         // remove selected class from both buttons (not so good practice!)
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         // add selected class to clicked button
         this.classList.add("selected");
         //
         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
         reset();
      });
   }
}

function squaresListeners(){
   for(var i = 0; i < squares.length; i++){
      // Add initial colors to the Squeres
      // we dont need it anymore as we have reset() at the begining
      // squares[i].style.backgroundColor = colors[i];
      // add click listeners to Squeres
      squares[i].addEventListener("click", function(){
         // Grab color of clicked square
         var clickedColor = this.style.backgroundColor;
         // Compare clicked square color to the pickedColor
         if(clickedColor === pickedColor){
            // Change h1 background
            h1.style.backgroundColor = clickedColor;
            // Display messageDisplay in the Header
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
         } else {
            this.style.backgroundColor = "#232323";
            // Display messageDisplay in the Header
            messageDisplay.textContent = "Try Again!";
         }
      });
   }
}

function reset(){
   // Generate all new colors
   colors = generateRandomColors(numSquares);
   // Pick a new random color from array
   pickedColor = pickColor();
   // Change colorDisplay to match pickedColor
   colorDisplay.textContent = pickedColor;
   // Reset resetButton text to New Colors
   resetButton.textContent = "NEW COLORS";
   // hide messegeDisplay span
   messageDisplay.textContent = "";
   // Reset h1 color background
   h1.style.backgroundColor = "steelblue";
   // change colors of squares
   for(var i = 0; i < squares.length; i++){
      if(colors[i]){
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
      } else {
         squares[i].style.display = "none";
      }
   }
}

function changeColor(color){
   //Loop true all squares
   for(var i = 0; i < colors.length; i++) {
      //Change each color to match given color
      squares[i].style.backgroundColor = color;
      // h1.style.backgroundColor = color;
   }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
   // Make an array
   var arr = [];
   // repeat num times
   for(var i = 0; i < num; i++) {
      // get random color and push into array
      arr.push(randomColor());
   }
   // return that array
   return arr;
}

function randomColor(){
   // pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
   // pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256);
   // pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256);
   // return the color as string
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
   reset();
   // // Generate all new colors
   // colors = generateRandomColors(numSquares);
   // // Pick a new random color from array
   // pickedColor = pickColor();
   // // Change colorDisplay to match pickedColor
   // colorDisplay.textContent = pickedColor;
   // // Reset resetButton text to New Colors
   // this.textContent = "NEW COLORS";
   // // hide messegeDisplay span
   // messageDisplay.textContent = "";
   // // Reset h1 color background
   // h1.style.backgroundColor = "steelblue";
   // // change colors of squares
   // for(var i = 0; i < squares.length; i++){
   //    squares[i].style.backgroundColor = colors[i];
   // }
});


// easyBtn.addEventListener("click", function(){
//    hardBtn.classList.remove("selected");
//    this.classList.add("selected");
//    // Set numSquares to be 3
//    numSquares = 3;
//    // Generate Number(numSquares) random colors
//    colors = generateRandomColors(numSquares);
//    // pick a new pickedColor
//    pickedColor = pickColor();
//    // Hide messageDisplay span (reset it to be hidden)
//    messageDisplay.textContent = "";
//    // back the h1 background-color to be steelblue
//    h1.style.backgroundColor = "steelblue";
//    // Change colorDisplay to match pickedColor
//    colorDisplay.textContent = pickedColor;
//    // Loop true and set bottom 3 squares property (display: "none")
//    for(var i = 0; i < squares.length; i++) {
//       // if there is a next color beyond 3
//       if(colors[i]) {
//          // change the next 3 (bottom) squares display: none
//          squares[i].style.backgroundColor = colors[i];
//       } else {
//          squares[i].style.display = "none";
//       }
//    }
// });

// hardBtn.addEventListener("click", function(){
//    easyBtn.classList.remove("selected");
//    this.classList.add("selected");
//    // Set numSquares to be 3
//    numSquares = 6;
//    // Generate 6 random colors
//    colors = generateRandomColors(numSquares);
//    // pick a new pickedColor
//    pickedColor = pickColor();
//    // Hide messageDisplay span (reset it to be hidden)
//    messageDisplay.textContent = "";
//    // back the h1 background-color to be steelblue
//    h1.style.backgroundColor = "steelblue";
//    // Change colorDisplay to match pickedColor
//    colorDisplay.textContent = pickedColor;
//    // Loop true and set bottom 3 squares property (display: "none")
//    for(var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//    }
// });

// Display Mission Color
// we run it on reset() function, so we don`t need it anymore
// colorDisplay.textContent = pickedColor;