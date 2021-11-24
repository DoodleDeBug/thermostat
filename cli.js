const readlineSync = require('readline-sync')
const Thermostat = require("./thermostat");

const thermostat = new Thermostat();

// input = readlineSync.question('Command:');
while (true) {
    console.log(`Temperature is ${thermostat.getTemperature()}`);
    readlineSync.setDefaultOptions({limit: ['up', 'down']});
    command = readlineSync.question('Enter command:');
    if (command === 'up') {
        thermostat.up();
    }
    else {
        thermostat.down();
    }
}
