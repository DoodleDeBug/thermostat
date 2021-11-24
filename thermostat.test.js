const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  it("returns the temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
  it("returns an increased temperature", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
});
