const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const arrayNew = arrayNumbers.map((currentValue) => {
    return currentValue + 10;
});

console.log(` Add 10 into each element `);
console.log(arrayNew);

const arrNew = arrayNumbers.map((currentValue) => {
    const res = currentValue * currentValue * currentValue;
    return res;
});

console.log(` Cube the each array element `);
console.log(arrNew);

const arryNew = arrayNumbers.map((currentValue, index) => {
    return currentValue + index;
});

console.log(` Add the index value into it's co-rresponding each array element `);
console.log(arryNew);