console.log(`====================== Step 1 =====================`);

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = num; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

// Example usage:
const array = [3, 9, 7, 6, 19, 29, 53];

console.log("Number of prime numbers in the array :", countPrimes(array));
console.log(` `);

console.log(`====================== Step 2 =====================`);

function spaceCount(arg) {
    const res = arg.split(" ").length - 1;

    console.log(`Number of spaces in string is : ${res} `);


}
spaceCount(`Revision is the mother of success`);
spaceCount(`JavaScript is the language of internat world`);