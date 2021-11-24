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
});
