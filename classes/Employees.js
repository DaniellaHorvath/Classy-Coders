class Employees {
    #salary
    #isHired = true;
    #allEmployees = [];
constructor(name, position, salary){
    this.name = name;
    this.position = position;
    this.#salary = salary;
    
}

getSalary(){
    return this.#salary;
}

setSalary(amount){
    this.#salary += amount;
}

getStatus(){
   return this.#isHired
}

setStatus(command){
   if(command === "hire"){
     this.#isHired = true
   } if  (command === "fire" ) {
        this.#isHired = false
    }
      
      
   }
}
// const preston = new Employees("Preston", "Engineer", 100000);
// console.log(preston.getSalary()); // 100000
// console.log(preston.setSalary(105000));
// console.log(preston.getSalary()); // 105000
// console.log(preston.getStatus()); // true;
// console.log(preston.setStatus("fire"));
// console.log(preston.getStatus()); // false;
    


module.exports = {
    Employees,
}