console.log(`==================== STEP 1 ====================`);

function greaterNumber(num1, num2) {
    var result = num1 > num2;
    console.log(`${num1} is greater than ${num2}`);
}
greaterNumber(10, -10);
greaterNumber(899, 800);

console.log(`==================== STEP 2  ====================`);

function isEvenOrOddNum(n1, n2, n3, n4) {
    var resn1 = n1 % 2 == 0 ? "EVEN " : "ODD";
    console.log(`Given number ${n1} is ${resn1}`);

    var resn2 = n2 % 2 == 0 ? "EVEN" : "ODD";
    console.log(`Given number ${n2} is ${resn2}`);

    var resn3 = n3 % 2 == 0 ? "EVEN " : "ODD";
    console.log(`Given number ${n3} is ${resn3}`);

    var resn4 = n4 % 2 == 0 ? "EVEN " : "ODD";
    console.log(`Given number ${n4} is ${resn4}`);

    return resn1, resn2, resn3, resn4;

}
isEvenOrOddNum(29, 44, 0, 101);

console.log(`==================== STEP 3  ====================`);

var result = function wordLength(word) {
    var result = word.length % 2 == 0 ? "EVEN " : "ODD";
    console.log(`Given word ${word} is with ${result} length`);

}
result("JavaScript");
result("Developer");
result("Google");