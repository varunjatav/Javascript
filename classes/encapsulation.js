class Employee {
 // function for setting the data;
    setEmployeeDetails(name, id, phoneNo){
       this.name = name;
       this.id = id;
       this.phoneNo = phoneNo;
    }
  // functions for getting the data;
    getEmployeeName() {
        return this.name;
    }
    getEmployeeId() {
        return this.id;
    }
    getEmployeephoneNo(){
        return this.phoneNo;
    }
}

let emp1 = new Employee();
// setting the data;
emp1.setEmployeeDetails("John", 1001, 8976512340);

// getting the data;
console.log(emp1.getEmployeeName()); 
console.log(emp1.getEmployeeId());
console.log(emp1.getEmployeephoneNo());