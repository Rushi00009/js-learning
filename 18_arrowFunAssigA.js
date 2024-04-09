//1. Arrow function with no argument and no return value

let show = () => {
    console.log(`========== Arrow function with no argument and no return value =========`);
    console.log(`Good Morning, Today is Monday `);

}

show();

//2. Arrow function with arguments and no return value

console.log(`========== Arrow function with argument and no return value =========`);

let mul = (n1, n2, n3 = 1) => {

    console.log(`Multiplication is : ${n1*n2*n3}`);

}

mul(5, 5, 2);
mul(10, 4)


//3. Arrow function with arguments and return value

console.log(`========== Arrow function with argument and return value =========`);

let add = (num1, num2, num3, num4, num5, num6 = 0, num7 = 0) => {

    let result = num1 + num2 + num3 + num4 + num5 + num6 + num7;
    return result;

}

let finalresult = add(100, 100, 200, 349, 756);
let finalresult1 = add("I", " am", " Learning", " ES6", " features", " in", " depth");


console.log(finalresult);
console.log(finalresult1);