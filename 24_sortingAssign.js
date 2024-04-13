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

// Sorting an array in descending order of Employees with it's Id 

console.log(`Sorting an array in descending order of Employees with it's Id`);
arrayEmployees.sort((p1, p2) => {
    return p1.emp_id >= p2.emp_id ? -1 : 1
});

arrayEmployees.forEach(element => {
    console.log(`Id : ${element.emp_id}  Employee Name : ${element.emp_name}  Department : ${element.emp_dept}`);
});

// Sorting an array in ascending order of Employees with it's Department 

console.log(`Sorting an array in ascending order of Employees with it's Department `);
const sorted = arrayEmployees.sort((p1, p2) => {
    return p1.emp_dept > p2.emp_dept ? 1 : -1
});

sorted.forEach(element => {
    console.log(`Id : ${element.emp_id}  Department : ${element.emp_dept}  Company : ${element.emp_company}`);
});


// Sorting an array in descending of Employees with it's Salary 

console.log(`Sorting an array in descending of Employees with it's Salary `);

arrayEmployees.sort((p1, p2) => {
    return p1.emp_salary >= p2.emp_salary ? -1 : 1
});

arrayEmployees.forEach(element => {
    console.log(`Employee Name : ${element.emp_name}  Salary : ${element.emp_salary}  Company : ${element.emp_company}`);
});