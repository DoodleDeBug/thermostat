const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  const thermostat = new Thermostat();

  it("returns the temperature", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns an increased temperature", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("returns a decreased temperature", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("doesnt decrease temperature below 10", () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });
});
