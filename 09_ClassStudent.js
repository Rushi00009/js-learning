class Student {
    constructor(rollNumber, name, division) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    detail() {
        console.log(`Person Details => rollNumber: ${this.rollNumber}, name: ${this.name}, division: ${this.division}`);
    }
}
const rushi = new Student(1, "Rushi", "A");
rushi.detail();

const ram = new Student(2, "Ram", "B");
ram.detail();

const shyam = new Student(3, "Shyam", "C");
shyam.detail();