
// making constructor function without class

//  first one data can be accessed by outside world;
console.log("----------------------------------------------------------------")
function Employee(name, age, basicSalary){
    this.name = name;
    this.age = age;
    this.basicSalary = basicSalary;
    this.monthlyBonus = 1000;

    this.calculateFinalSalary = ()=> {
         console.log(`Final Salary is : ${this.basicSalary + this.monthlyBonus}`);
    }
   
    this.getDetails = () => {
        console.log(`Employee Details name: ${this.name} age: ${this.age}`);
    }
}

let emp1 = new Employee("John",30 , 50000);

emp1.getDetails();
// accessable form outside world
emp1.monthlyBonus = 12000;
emp1.calculateFinalSalary();



console.log("----------------------------------------------------------------")

//  Second one data cannot be accessed by outside world;

// Note : here we are making maonthly bonus variable and calculateFinalSalary func 
// private by removing this key word Private - means both have their scopes under
//  Employee 2 constructor function  they cannot be accessed by outside world;
function Employee2(name, age, basicSalary){
    this.name = name;
    this.age = age;
    this.basicSalary = basicSalary;
   //make monthly bonus private by removing this keyword;
    let monthlyBonus = 1000;  
   //make calculateFinalSalary function also private by removing this keyword;
    let calculateFinalSalary = ()=> {
         console.log(`Final Salary is : ${basicSalary + monthlyBonus}`);
    }
   
    this.getDetails = () => {
        console.log(`Employee Details name: ${this.name} age: ${this.age}`);
        // calling  calculateFinalSalary() here so that user can see desired result but also can't have accessed to it;
        calculateFinalSalary();
    }
}

let emp2 = new Employee2("John",30 , 50000);

emp2.getDetails();
// accessable form outside world
emp2.monthlyBonus = 12000;
// error: emp2.calculateFinalSalary(); is not a function because we cannot accessd it from here its scope it unde Employee 2 func
// emp2.calculateFinalSalary();

console.log("----------------------------------------------------------------")