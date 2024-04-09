console.log(`Print the number from 5 to 15 by incrementing 1 `);

for (let index = 5; index <= 15; index++) {
    process.stdout.write(index + ' ');
    // console.log(index);
}
console.log();

console.log(`Print the number from 50 to 40 by decrementing 1 `);

for (let index = 50; index >= 40; index--) {
    process.stdout.write(index + ' ');
    // console.log(index);
}
console.log();

console.log(`Print the first 15 odd number`);

for (let index = 1; index <= 30; index = index + 2) {
    process.stdout.write(index + ' ');
    // console.log(index);
}
console.log();

console.log(`Print the first 10 even number`);

for (let index = 2; index <= 20; index = index + 2) {
    process.stdout.write(index + ' ');
    // console.log(index);

}
console.log();

console.log(`Print the number from 5 to 50 by incrementing 5 `);

for (let index = 5; index <= 50; index = index + 5) {
    process.stdout.write(index + ' ');
    // console.log(index);
}
console.log();

console.log(`Print the number from 10 to 100 by incrementing 10 `);


for (let index = 10; index <= 100; index = index + 10) {
    process.stdout.write(index + ' ');
    // console.log(index);
}
console.log();

console.log(`Print the number from 100 to 10 by decrementing 10 `);

for (let index = 100; index >= 10; index = index - 10) {
    process.stdout.write(index + ' ');
    // console.log(index);

}