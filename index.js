var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

//* This in in case of using the buttons on the screen.

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;

//* Calling the function with the same parameter.

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

});

}

//* This is in case of using the keyboard.

document.addEventListener("keypress", function(event) {

//* Calling the function and associating it with the "key" property. In both cases we are calling the same parameter.

  makeSound(event.key);

  buttonAnimation(event.key);

});

//* This function will be called for both events, click and keypress.

function makeSound(key) {

switch (key) {

  case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

  case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

  case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
  break;

  case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
  break;

  case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
  break;

  case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
  break;

  case "l":
    var kickBass = new Audio ("sounds/kick-bass.mp3");
    kickBass.play();
  break;

  default: console.log(key);

}}

//* We can use the classes of each button to query our document for that selector.

function buttonAnimation(currentKey) {

//* We need to concatenate the full stop to select the class (.w or .j for instance)

  var activeButton = document.querySelector("." + currentKey);

//* Apply a CSS class

  activeButton.classList.add("pressed");

//* Come back to the original unpressed button.

  setTimeout (function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
