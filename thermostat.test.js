const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  it("returns the temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
});
