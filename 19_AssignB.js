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

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

console.log(`========== Find all the Employees working in TCS ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_company == "TCS") {
        const name = element.emp_name;
        const Company = element.emp_company;
        console.log(`Employee Name : ${name} and Company : ${Company}`);
    }
});
console.log(" ");
console.log(`========== Find the Finance department Employees ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_dept == "Finance") {
        console.log(`Department Name : ${element.emp_dept} and Employee Name : ${element.emp_name}`);
    }
});

console.log(" ");
console.log(`========== Find the employees whose name start with R ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_name.startsWith("R")) {
        element.detail();
    }
});

console.log(" ");
console.log(`========== Find the employees whose Salary is grater than 75000 ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_salary > 75000) {
        console.log(`Employee Name : ${element.emp_name} , Company Name : ${element.emp_company}, Salary : ${element.emp_salary}`);
    }
});

console.log(" ");
console.log(`========== Find the employees whose Salary is grater than 50000 and from IT department ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_salary >= 50000 && element.emp_dept == "IT") {
        element.detail();
    }
});

console.log(" ");
console.log(`========== Find out all the Employees from company Infy ==========`);

arrayEmployees.forEach(element => {
    if (element.emp_company == "Infy") {
        element.detail();
    }

});