console.log("==================== Step 1 ====================");

function info() {
    console.log("Welcome To Codemind Technology");
}
info();

function learn() {
    console.log("We learn Angular");
}
learn();

console.log("==================== Step 2 ====================");

function personalDetails(firstName, lastName, collegeName) {
    firstName = "Rushikesh";
    lastName = "Pol";
    collegeName = "SVERI's College Of Engineering Pandharpur";
    console.log("First Name :", firstName);
    console.log("Last Name :", lastName);
    console.log("College Name :", collegeName);
}
personalDetails();
console.log("==================== Step 3 ====================");

function swapvalues(arg1, arg2) {
    console.log("Before Swap :", arg1, arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After Swap :", arg1, arg2);
}
swapvalues("Virat", "Anushka");
console.log("-----------------------------------------------");
swapvalues(1000, 2000);
console.log("==================== Step 4 ====================");

function add(value1, value2, value3) {
    console.log("Arguments :", value1, value2, value3);
    var res = value1 + value2 + value3;
    console.log("Addition :", res);
}
add(10.23, 600, 40);
add("Hello", " Good", " Morning");