function squareOfWordLength(string1, string2, string3) {
    var lengthString1 = string1.length;
    console.log(`Given string is : ${string1}`);

    console.log(`The length of the string 1 is : ${lengthString1}`);
    console.log(`The square of the length is : ${lengthString1*lengthString1}`);
    console.log(`---------------------------------------`);

    var lengthString2 = string2.length;
    console.log(`Given string is : ${string2}`);

    console.log(`The length of the string 2 is : ${lengthString2}`);
    console.log(`The square of the length is : ${lengthString2*lengthString2}`);
    console.log(`---------------------------------------`);


    var lengthString3 = string3.length;
    console.log(`Given string is : ${string3}`);

    console.log(`The length of the string 3 is : ${lengthString3}`);
    console.log(`The square of the length is : ${lengthString3*lengthString3}`);
    console.log(`---------------------------------------`);

}
squareOfWordLength("JavaScript", "Google Chrome", "Developer Smart");

function string() {
    string = "I am Angular Developer";
    console.log(`Given string is : ${string}`);
    var lengthOfString = string.length;
    console.log(`The length of the given string is : ${lengthOfString}`);

    var splitstring = string.split(" ");
    console.log(`The total number of the words in string are : ${splitstring.length}`);
    console.log(`After Divide the length of the string by total number of words are : ${lengthOfString / splitstring.length}`);
    console.log(`After Multiplication of the length of the string and total number of words are : ${lengthOfString * splitstring.length}`);

}
string();