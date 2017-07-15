# Task 2 - NodeRed Blink

Well done on getting the LED to blink, that's only the beginning though.

Let's get into creating a real connected device by hooking it up to a public MQTT allowing it to be controlled online.

This project was prepared for the Melbourne international nodebots day 2017 and is designed to be run as a stand alone task. Examples and information is based off [this repo](https://github.com/nodebotsau/workshops/tree/master/iot-intro)

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
Using node red, create a flow to receive an incomming MQTT message and toggle the status of an LED.

Use the following MQTT server settings:

- Host: test.mosquitto.org
- Port: 1883
- Topic: nbd/`{something-unique}`


## To run

### Node Red
In a terminal opened to the current directory, run the following command to start node-red. 

Note: On windows machines, replace `/` with `\`
```
./node-modules/.bin/node-red
```

### MQTT Broker (Mosca)
In another terminal opened in the current directory, run the following command

Note: On windows machines, replace `/` with `\`
```
./node_modules/.bin/mosca -v --http-port 8883
```
This will give you both an MQTT server on port 1883 locally (which you can point node red or some JS code at). In addition it will expose a websockets host on port 8883 if you want to use that from a browser.

### Pub Sub from the command line
We can use the MQTT node library to publish and subscribe to topics from the command line.

#### To subscribe to a topic:
```
./node_modules/.bin/mqtt_sub -v -h test.mosquitto.org -t "nbd/{something-unique}"
```
Noting you can change the host parameter to your local mosca server for example.

#### To publish to a topic
```
./node_modules/.bin/mqtt_pub -h test.mosquitto.org -t "nbd/{something-unique}" -m "Your message to subscribers"
```

Noting again that you can change the host parameter to your local mosca server for example.

## Solution
To run the solution, copy the contents of `solution/node-red-blink.json`

Then in node red:
- Click on the hamburger menu in the top right corner
- Hover over `Import`
- Click on Clipboard
- Paste the contents of the `node-red-blink.js` file
- Make sure `new flow` is selected
- Click on the red `Import` button
