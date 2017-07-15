var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance
  var led = new five.Led(13);

  //End nicely
  this.on("exit", function() {
    led.off();
  });

  // Turn on the LED
  led.on();

  console.log("Type either 'on()' or 'off()' to toggle the LED");

  // Create a repl watching for key combinations
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
