// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, role, officeNumber) {
        super(name, email, id, role)
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager