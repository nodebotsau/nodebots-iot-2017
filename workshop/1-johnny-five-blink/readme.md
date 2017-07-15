# Task 1 - Johnny five blink

Before getting into anything relating to the interent, let's see if you can access and control your arduino locally.

This project was prepared for the Melbourne international nodebots day 2017 and is designed to be run as a stand alone task

## Requirements
- An Arduino (uno) flashed with firmata firmware
- Laptop or Desktop
- Node version manager
- Node (v6.9.2)
- Interchange
- An LED

## Setup

### Laptop setup
#### Install nvm using the following links:
- Windows: [https://github.com/coreybutler/nvm-windows/releases/latest](https://github.com/coreybutler/nvm-windows/releases/latest) - select nvm-setup.zip
- Linux/Mac: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

#### Install node version 6.9.2
With nvm installed, run the following command
```
nvm install 6.9.2 && nvm use 6.9.2
```

#### Install interchange
[Interchange](https://www.npmjs.com/package/nodebots-interchange) is a node based firmware flashing utility allowing us to install firmware called 'firmata' on our arduino.
Firmata allows the communication of the johnny five library to execute commands on the arduino
```
npm install -g nodebots-interchange
```

### Arduino setup
With interchange installed and an Arduino plugged into your laptop, run the interchange interactive installer 
```
interchange install --interactive
```

Then Select:
- firmware: `Standard firmata`
- board: `uno`
- port: this is usually the only option available

### Project setup
- Open a terminal in this directory and run `npm install` to install all the project dependencies

## Task
Using the [Johnny five documentation](http://johnny-five.io/examples/), try to get the LED to turn on and off bytyping `on()` and `off()` in the console

First try out the blink application to confirm your LED is working
```
node blink.js
```
A file stub has been created for you in `toggle.js`.
If you're feeling adventurous, you can create a new file and start from scratch

## To run
In a terminal opened to the current directory, run the command 
```
node toggle.js
```

## Solution
To run the solution, run the node command 
```
node ./solution/toggle.js
```