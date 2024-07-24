const { Employees } = require("./classes/Employees");
const { Manager } = require("./classes/Manager");
const { SalesPerson } = require("./classes/SalesPerson");
const { SoftwareEngineer } = require("./classes/SoftwareEngineer");

// Run and debug your code here

// const jenna = new Manager(
//   "Jenna",
//   "Head of Engineers",
//   120000,
//   "Software Engineering",
//   10
// );
// const programmer = new SoftwareEngineer(
//   "Becca",
//   "Senior Software Engineer",
//   100000,
//   ["JavaScript", "Java", "Python"]
// );
// const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, [
//   "Vine",
//   "MySpace",
//   "Shutterfly",
// ]);

// console.log(Employees.getEmployees()); // [ Manager { }, SoftwareEngineer { }, SalesPerson { }]
// console.log(Employees.getTotalSalary()); // 310000

module.exports = {
  Employees,
  Manager,
  SalesPerson,
  SoftwareEngineer,
};
