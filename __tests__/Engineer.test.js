const Engineer = require("../lib/Engineer");

test("can create an engineer instance", () => {
    const testEngineer = new Engineer()
    expect(typeof(testEngineer)).toBe("object");
});

test("is name entered", () => {
    const name = "Dennis"
    const testEngineer = new Engineer(name)
    expect(testEngineer.name).toBe(name)
});