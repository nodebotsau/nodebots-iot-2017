'use strict';

const Alexa = require('alexa-sdk');
const MQTT = require('mqtt');

const APP_ID = undefined;

const languageStrings = {
    'en': {
        translation: {
            TURNING_LED_ON: 'Turning LED on',
            TURNING_LED_OFF: 'Turning LED off',
            SKILL_NAME: 'IoT LED',
            HELP_MESSAGE: 'You can say turn LED On or Off, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'TurnLedOnIntent': function () {
      this.emit('TurnLedOn');
    },
    'TurnLedOn': function () {
        // Create speech output
        toggleLED('on').then(() => {
            this.emit(':tellWithCard', this.t('TURNING_LED_ON'), this.t('SKILL_NAME'));
        });
    },
    'TurnLedOffIntent': function () {
      this.emit('TurnLedOff');
    },
    'TurnLedOff': function () {
        // Create speech output
        toggleLED('off').then(() => {
            this.emit(':tellWithCard', this.t('TURNING_LED_OFF'), this.t('SKILL_NAME'));
        });
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

const toggleLED = (msg) => {
    return new Promise((resolve, reject) => {
        const mqttUrl = process.env['mqtt'];
        const topic = process.env['topic'];
        console.log(mqttUrl);
        console.log(topic);

        var client  = MQTT.connect(mqttUrl);
        
        client.on('connect', function () {
            client.publish(topic, msg);
            client.end();
            resolve();
        });
    });
};

exports.toggle = function (event, context) {
    

    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
