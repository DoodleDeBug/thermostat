class Thermostat {
  constructor() {
    this.temp = 20;
    this.max_temp = 35;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if ( this.temp + 2 <= this.max_temp) {
      this.temp += 2;
    }
    else {
      this.temp = this.max_temp
    }
  }

  down() {
    if ( this.temp > 10) {
      this.temp -= 1;
    }
  }

  setPowerSavingMode(status) {
    if ( status === true) {
      this.max_temp = 25;
    }
    else { 
      this.max_temp = 35;
    }
  }

}

module.exports = Thermostat;
