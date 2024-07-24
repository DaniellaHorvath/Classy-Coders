class Employees {
  #salary;
  #isHired = true;
  static #allEmployees = [];
  static #totalSalaries = 0;

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    Employees.#allEmployees.push(this, salary);
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    // console.log(Employees.#allEmployees.salary);
    for (let i = 0; i < Employees.#allEmployees.length; i++) {
      let currentEmployeeSalary = Employees.#allEmployees[i];
      console.log("HERE:", currentEmployeeSalary);
      Employees.#totalSalaries += Number(currentEmployeeSalary);
    }

    return Employees.#totalSalaries;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary += amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    }
    if (command === "fire") {
      this.#isHired = false;
    }
  }
}
// const preston = new Employees("Preston", "Engineer", 100000);
// console.log(preston);
// console.log(preston.getSalary()); // 100000
// console.log(preston.setSalary(105000));
// console.log(preston.getSalary()); // 105000
// console.log(preston.getStatus()); // true;
// console.log(preston.setStatus("fire"));
// console.log(preston.getStatus()); // false;

module.exports = {
  Employees,
};
