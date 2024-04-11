let array = [2, 4, 1, 7, 8, 9];

const sum = array.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue;
}, 0);
console.log(sum);



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

console.log(` Get the average salary of employee's from IT department `);
const newArray = arrayEmployees.filter((emp) => {
    return emp.emp_dept == "IT";
});

const sumSalary = newArray.reduce((runningTotal, currentValue) => {
    return runningTotal + currentValue.emp_salary;
}, 0);
console.log(sumSalary);
console.log(`Average salary from IT department is: ${sumSalary/newArray.length}`);