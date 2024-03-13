var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is :", totalChars);



var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars - 1);
console.log("Last char is:", lastChar);



console.log("========== concat() ==================");
var firstName = "Rushikesh";
var lastName = " Pol";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);


console.log("========== Replace() ==================");
var greet = "Good Morning";
var afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is : ${afterReplace}`);

console.log("========== toUpperCase() ==================");
var greet = "Good Morning";
var greetInUpperCasegreet = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCasegreet}`);


console.log("========== trim() ==================");
var greet = `     Good Morning     `;
var lengthBeforeTrim = greet.length;
console.log(`${greet} it's length is : ${lengthBeforeTrim}`);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} and it's length is : ${lengthAfterTrim}`);

console.log(`Total space's removed : ${lengthBeforeTrim - lengthAfterTrim}`);

console.log("========== include() ==================");
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin' : ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR' : ${result}`);

console.log("========== search() ==================");
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log("========== slice() ==================");
var greet = "Good Morning";
var result = greet.slice(3, 4);
console.log(`slice is ${result}`);

console.log("========== split() ==================");
var greet = "Good Morning";
var resultvalue = greet.split(" ");
console.log(resultvalue);
console.log(`Total words are : ${resultvalue.length}`);

function totalword(sentence) {
    var words = sentence.split(" ");
    var totalwords = words.length;
    return totalwords

}
var totalwords = totalword("I am happy Buddy");
console.log(`"I am happy Buddy". Total number of words is : ${totalwords}`);

var totalwords = totalword(`"I am learning JS the language of internet"`);
console.log(`"I am learning JS the language of internet". Total number of words is : ${totalwords}`);