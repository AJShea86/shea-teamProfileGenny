const Manager = require("../lib/Manager");

describe("THIS IS TEST FOR Manager CLASS ", ()=> {
    it("should have a officeNumber property when instantiated with the officeNumber parameter", ()=> {
        const name = "Andrew";
        const id = 10;
        const email = "Andrew@mail.com";
        const officeNumber = 720;

        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.officeNumber).toEqual(officeNumber);
    })

    it("Should return the officeNumber property when getofficeNumber method is invoked", ()=> {
        const name = "Andrew";
        const id = 10;
        const email = "Andrew@mail.com";
        const officeNumber = 720;

        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getOfficeNumber()).toEqual(officeNumber);
    })

    it("Should return 'Manager' when the getRole method is invoked", ()=> {
        const name = "Andrew";
        const id = 10;
        const email = "Andrew@mail.com";
        const officeNumber = 720;

        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getRole()).toEqual("Manager");
    })
})