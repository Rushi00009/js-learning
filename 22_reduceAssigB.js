class employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    detail() {
        console.log(`Person Details => Name: ${this.emp_name}, Id: ${this.emp_id}, Dep: ${this.emp_dept}, Salary : ${this.emp_salary}, Company : ${this.emp_company}`);
    }
}

const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];


console.log(`******* Find out all the person from Company Wipro *******`);
const arrayNew = arrayEmps.filter((currentValue) => {

    return currentValue.emp_company == "Wipro";
});

arrayNew.forEach((element) => {
    console.log(`Employee Name : ${element.emp_name} and Company Name : ${element.emp_company}`);
});

console.log(`******* Find out all the person from IT Or HR Department *******`);

const arrNew = arrayEmps.filter((currentValue) => {
    return currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR";
});

arrNew.forEach((element) => {
    console.log(`Employee Name : ${element.emp_name} and Department Name : ${element.emp_dept}`);
});



console.log(`******* Find out all the Employees whose Id's are greater than 50 *******`);


const graterthan = arrayEmps.filter((currentValue) => {
    return currentValue.emp_id > 50;
});

graterthan.forEach((element) => {
    console.log(`Employee Name : ${element.emp_name} and Employee Id : ${element.emp_id}`);
});


console.log(`******* Find out all the Employees whose names start with letter "A" , "V" and "M" *******`);

const startwith = arrayEmps.filter((element) => {
    return element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M");
});

startwith.forEach((element) => {
    console.log(`Emloyee Name : ${element.emp_name}`);
});

console.log(`******* Find the average Salary of the employee for all the department *******`);


const avgsalary = arrayEmps.filter((emp) => {
    return emp.emp_dept;
});

const sumSalary = avgsalary.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue.emp_salary;
}, 0);
console.log(`Total Salary from all department : ${sumSalary}`);
console.log(`Average salary from all department is: ${sumSalary/avgsalary.length}`);

console.log(`******* Find the Salary of the employee form the IT department *******`);




const itsalary = arrayEmps.filter((emp) => {
    return emp.emp_dept == "IT";
});

const sumSalaryofIT = itsalary.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue.emp_salary;
}, 0);
console.log(`Total Salary from IT department : ${sumSalaryofIT}`);
console.log(`Average salary from IT department is: ${sumSalaryofIT/itsalary.length}`);