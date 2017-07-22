var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance

  //End nicely
  this.on("exit", function() {
    led.off();
  });

  // Turn on the LED

  console.log("Type either 'on()' or 'off()' to toggle the LED");

  // Create a repl watching for key combinations
  // Create two available commands, on and off to toggle the LED
});