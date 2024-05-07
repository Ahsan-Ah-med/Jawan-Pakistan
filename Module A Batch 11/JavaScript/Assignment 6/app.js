// Questions PDF 26-30.docx
// Chapter 26 (Rounding Numbers)

// 1. Form a statement that rounds a number to the nearest integer.
var num = 3.7;
var roundedNum = Math.round(num);

// 2. Round up a number represented by origNum and assign it to roundNum, which hasn&#39;t been declared beforehand.
var origNum = 4.2;
var roundNum = Math.ceil(origNum);

// 3. Round down a number represented by origNum and assign it to roundNum, which hasn&#39;t been declared beforehand.
var origNum = 5.8;
var roundNum = Math.floor(origNum);

// 4. Round a number represented by a variable and assign the result to a second variable that hasn&#39;t been declared beforehand.
var myNum = 6.4;
var roundedResult = Math.round(myNum);

// 5. Round .5 to 0 and assign it to a variable that hasn&#39;t been declared beforehand.
var roundToZero = Math.floor(0.5);

// Chapter 27 (Random Numbers)

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50
var randomNumber = Math.floor(Math.random() * 50) + 1;

// 2. Generate a random number and assign it to a variable that hasn&#39;t been declared beforehand.
var randomNum = Math.random();

// 3. You have to create a dice in JavaScript with the use of pseudorandom number.
var diceRoll = Math.floor(Math.random() * 6) + 1;

// 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
var tossResult = Math.floor(Math.random() * 2);
var tossOutcome = tossResult === 0 ? "Head" : "Tail";

// Chapter 28, 29 (Converting Strings)

// 1. How do you convert a string to an integer in JavaScript?
// You can convert a string to an integer in JavaScript using the parseInt() function or by using the unary plus operator (+)

// 2. Write a JavaScript function to convert the string &quot;123&quot; to an integer.
var str = "123";
var num = +str;
var num2 = parseInt(str);

// 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
var num = "5.234";
var num3 = parseFloat(num);

// 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

// 5. How can you convert a number to a string in JavaScript?
var num = 12345;
var str = num.toString();

// 6. Write a JavaScript function to convert the number 42 to a string.
var number = 42;
var string = number.toString();

// 7. Can you convert a string representing a decimal number (e.g., &quot;3.14&quot;) to an integer in JavaScript? If so, how?
var decimalString = "3.14";
var integerNumber = parseInt(decimalString);

// Chapter 30 (Controlling the length of decimals)

// 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn&#39;t been declared beforehand.
var num = 5.92847102842;
var newNum = num.toFixed(4).toString();

// 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
var num = 3.10284736592;
num = +num.toFixed(2).toString();

// 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
if (num.toFixed(2).toString().length > 4) {
}

// 4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.
var num = 2.20384729471;
var roundedString = num.toFixed(2).toString();
alert(roundedString);

// chapters26-30.pdf
// MATH METHODS

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num1 = prompt("Enter a postive integar");
document.write(
  "number: " +
    num1 +
    "<br>" +
    "round off value: " +
    Math.round(num1) +
    "<br>" +
    "floor value: " +
    Math.floor(num1) +
    "<br>" +
    "ceil value: " +
    Math.ceil(num1)
);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num2 = prompt("Enter a negative integar");
document.write(
  "<br>" +
    "number: " +
    num2 +
    "<br>" +
    "round off value: " +
    Math.round(num2) +
    "<br>" +
    "floor value: " +
    Math.floor(num2) +
    "<br>" +
    "ceil value: " +
    Math.ceil(num2)
);

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number = -4;
var absoluteValue = Math.abs(number);