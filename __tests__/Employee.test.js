const { test, expect } = require("@jest/globals");
const Employee = require(`../lib/Employee`);

test("can create an employee instance", () => {
    const testEmp = new Employee()
    expect(typeof(testEmp).toBe("object"))
})

test("is name entered", () => {
    const testEmp = new Employee(name)
    const name = "AJ"
    expect(testEmp.name).toBe(name)
})