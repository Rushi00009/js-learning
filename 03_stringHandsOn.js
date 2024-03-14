function stringHandsOn() {
    // Initial string and it's length 
    console.log(`======================== Step 1 ========================`);
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`Given string is : ${sentence}`);
    var length = sentence.length;
    console.log(`======================== Step 2 ========================`);
    console.log(`The length of the given string is : ${length}`);

    // Trim the string and calculate it's length 
    console.log(`======================== Step 3 ========================`);
    var trimsentence = sentence.trim();
    var length = trimsentence.length;
    console.log(`After trim string is : ${trimsentence} `);
    console.log(`After trim string the length of string is : ${trimsentence.length}`);

    console.log(`======================== Step 4 ========================`);
    // Calculate the Extra spaces
    console.log(`The total number of the extra space is : ${sentence.length - trimsentence.length}`);

    // Find the first and last character of string 
    console.log(`======================== Step 5 ========================`);
    trimsentence.charAt(0);
    trimsentence.charAt(trimsentence.length - 1);
    console.log(`The first character is : ${trimsentence.charAt(0)} and last character is : ${trimsentence.charAt(trimsentence.length - 1)}`);

    // Split the string and calculate the number of the words 
    console.log(`======================== Step 6 ========================`);
    var sentenceSplit = trimsentence.split(" ");
    var wordSentence = sentenceSplit.length;
    console.log(`Total numbers of words are : ${wordSentence}`);
    console.log(`Total words are : ${sentenceSplit}`);

    // Search the index of the given word 
    console.log(`======================== Step 7 ========================`);
    var trimsentence = trimsentence.search("good");
    console.log(`the index of the "good" is : ${trimsentence}`);

    // Print the string from given index 
    console.log(`======================== Step 8 ========================`);
    var trimsentence = sentence.trim();
    var indexSentence = trimsentence.substring(22);
    console.log(`The string starting from index 22 : ${indexSentence}`);

    // Check the string starting with given word 
    console.log(`======================== Step 9 ========================`);
    console.log(`The string starting word is Hey :`, trimsentence.startsWith("Hey"));

    // Check the string end with given word 
    console.log(`======================== Step 10 ========================`);
    console.log(`The string end word is up :`, trimsentence.endsWith("up"));

}
stringHandsOn();