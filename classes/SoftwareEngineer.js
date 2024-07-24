const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
  #programmingLanguages = [];

  constructor(name, position, salary, programmingLanguages) {
    super(name, position, salary);
    this.#programmingLanguages = programmingLanguages;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  setProgrammingLanguages(language) {
    this.#programmingLanguages.push(language);
  }
}

const programmer = new SoftwareEngineer(
  "Becca",
  "Senior Software Engineer",
  100000,
  ["JavaScript", "Java", "Python"]
);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguages("C#");
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]

module.exports = {
  SoftwareEngineer,
};
