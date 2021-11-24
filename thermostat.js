class Thermostat {
  constructor() {
    this.temp = 20;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    this.temp += 2;
  }
}

module.exports = Thermostat;
