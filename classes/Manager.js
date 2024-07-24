const { Employees } = require("./Employees");

class Manager extends Employees {
  #employeesManaged = [];
  constructor(name, position, salary, department) {
    super(name, position, salary);
    this.department = department;
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

// const jenna = new Manager(
//   "Jenna",
//   "Head of Engineers",
//   120000,
//   "Software Engineering",
//   10
// );
// console.log(jenna.getEmployeesManaged()); // []
// const preston = new Employees("Preston", "Engineer", 100000);
// jenna.setEmployeesManaged(preston);
// console.log(jenna.getEmployeesManaged()); // [ Employee ]

module.exports = {
  Manager,
};
