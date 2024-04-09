console.log(`============== step 1  =================`);

const word = "I am very good IT Developer";
const vowels = "aeious";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLocaleLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++
    }

}
console.log(`The count of the vowels in the given string is : ${vowelsCount}`);

console.log(`============== step 2  =================`);

let sum = 0;
for (let index = 0; index <= 5; index++) {
    sum = sum + index * index * index;

}
console.log(`Sum of the cube is : ${sum}`);


console.log(`============== step 3  =================`);

function oddPositionChars(string1, string2) {
    for (let index = 0; index < word.length; index++) {
        const element = string1.charAt(index);
        if (index % 2 != 0 && element != " ") {

            console.log(element);

        }

    }
}
oddPositionChars("Hard work always pays back");
console.log(" ");
oddPositionChars("Soon I will be IT Champ");