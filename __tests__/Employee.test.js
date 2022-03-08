// const { test, expect } = require("@jest/globals");
const { test, expect } = require("@jest/globals");
const Employee = require(`../lib/Employee`);

test("can create an employee instance", () => {
    const testEmp = new Employee()
    expect(typeof(testEmp)).toBe("object");
});

test("is name entered", () => {
    const name = "AJ"
    const testEmp = new Employee(name)
    expect(testEmp.name).toBe(name)
});

//test for the id
test("is id entered", () => {
    const id = 123;
    const idOutput = new Employee("AJ", id, "email@email.com");
    expect(idOutput.id).toBe(id)
});

//test for the email
// test("is an email entered", () => {
//     const testEmail = "email@email.com"
//     const testEmailOutput = new Employee("emailInput", testEmail);
//     expect(testEmailOutput).toBe(testEmail)
// })