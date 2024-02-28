// Class Assignment # 15
// JavaScript Assignment # 2

// CHAPTER 4 LEGAL AND ILLEGAL VARIABLE NAME 

// 1. Declare 3 variables in one statement.
var input1, input2, input3;

// 2. Declare 5 legal & 5 illegal variable names.
// LEGAL:
var legalVar, legal_var, legalvar, _legarvar, $legalVar;
// ILLEGAL:
// var illegal-Var, 288illegalVar, illegal var, illegal/var, illegal%var;

// 3. Display this in your browser
document.write(
    "a): <h1>Rules for naming JS variables</h1><br> b): Variable names can only contain letters, digits, underscores, dollarsign. <br> c): Variables must begin with a underscores, dollarsign, or letter.<br> d): Variable names are <b>Case Sensitive</b>. <br> e): Variable names should not be JS keywords like if, function, for, var, etc.  "
);


// CHAPTER 5: MATH EXPRESSION 

// 1. Write a program that take two numbers & add Them in a new variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<br>The sum of " + num1 + " and " + num2 + " is " + sum);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 3;
var num2 = 5;
// subtraction
var difference = num1 - num2;
console.log(difference)
// multiplication
var multiplication = num1 * num2;
console.log(multiplication)
// division
var division = num1 / num2;
console.log(division)
// modulus
var modulus = num1 % num2;
console.log(modulus)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var decValue;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("<br>Value after variable declaration is: " + decValue);
// c. Initialize the variable with some number.
decValue = 5;
document.write("<br>Initial value: " + decValue);
// e. Increment the variable.
decValue++;
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("<br>Initial value: " + decValue);
// g. Add 7 to the variable.
decValue += 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("<br>Initial value: " + decValue);
// i. Decrement the variable.
decValue--;
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("<br>Initial value: " + decValue);
// k. Show the remainder after dividing the variable’s value by 3.
var remainder = decValue % 3;
// l. Output : “The remainder is : 0”.
document.write("<br>After Remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br>Total Cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR <br>");

// 5. Write a script to display multiplication table of any number in your browser. E.g
var table = 6;
var number = 1;

document.write("Table of " + table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
var fara = 70;
var calc = 25;
var celsiusTempra = (fara - 32) * 5 / 9;
var fahrenheitTempra = (calc * 9 / 5) + 32;
document.write("25°C is" + fahrenheitTempra + "°F" + "<br>" + "70°F is " + celsiusTempra + "°C.")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
var product1 = 650;
var product2 = 100;
var productQuantity1 = 3;
var productQuantity2 = 7;
var shippingCharges = 100;
var totalPrice = (product1 * productQuantity1) + (product2 * productQuantity2) + shippingCharges;
document.write("<br>" + "<h1>Shopping Cart</h1>" + "<br>" + "Price of item 1 is " + product1 + "<br>" + "Quantity of item 1 is " + productQuantity1 + "<br>" + "Price of item 2 is " + product2 + "<br>" + "Quantity of item 2 is " + productQuantity2 + "<br>" + "Shipping Charges is " + shippingCharges + "<br>" + "Total cost of your order is " + totalPrice);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;
document.write("<br>", "<h1>Mark sheet</h1>", "<br>" + "total marks:" + totalMarks + "<br>", "marks obtained:", marksObtained + "<br>" + "Percentage:" + percentage + "%");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
var initialNumber = 8;
var result = ((initialNumber + 5) * 10) / 2;
console.log("Result:", result);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
var currentYear = 2024;
var birthYear = 2000;
var finalAge = currentYear - birthYear;
document.write("<br>" + "<h1>Age Calculator</h1>", "<br>", "Current Year: ", currentYear, "<br>", "Birth Year: ", birthYear, "<br>", "Your Age: ", finalAge);

//  12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and // output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radiusValue = 20;
var pi = 3.142;
var circumference = 2 * pi * radiusValue;
var areaCircle = pi * (radiusValue * radiusValue)
document.write("<br>" + "<h1>The Geometrizer</h1>", "<br>", "Radius of a circle: ", radiusValue, "<br>", "The circumference is: ", circumference, "<br>", "The area is: ", areaCircle);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var favorite = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var estimated = 3;
var lifetime = (currentAge - maxAge) * estimated;
document.write("<br>" + "<h1>The Lifetime supply calculator</h1>", "<br>", "Favourite snack: ", favorite, "<br>", "Current age: ", currentAge, "<br>", "Estimated Maximum age: ", maxAge, "<br>", "Amount of snacks per day", estimated, "<br>", "You will need ", lifetime, " ", favorite, " to last you until the ripe old age of ", maxAge);


// CHAPTER 6-9: MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var num = 10;
document.write("<br>", "<br>", "Result:", "<br>", "The value of a is", num, "<br>", "<br>-----------------------------------------------<br>The value of ++a is: ", ++num, "<br>", "Now The value is: ", num, "<br>", "The value of ++a is: ", num++, "<br>", "Now The value of a is", num, "<br>", "The value of --a is: ", --num, "<br>", "Now The value is: ", num, "<br>", "The value of a-- is ", num--, "<br>", "Now The value of a is: ", num);


// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
document.write("<br><br><br>", "A is: ", a, "<br>", "B is: ", b, "<br>", "Result is: ", result)

// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome to our website!");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var table = +prompt("Enter your number for multiplication") || 5;
var number = 1;
document.write("Number Table")
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");
document.write(table + " x " + number + " = " + number++ * table + "<br>");


// Home [PDF] chp6-9.docx
// Chapter 6 (Math Expression II)


// 1. Code a short form of x = x + 1; Use either of the two legal expressions.
x += 1;
x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
var x = 100;
--x;

// 3. var x = 50; var y = x++;
// What is the value of y?
// y is Equal to 50

// 4. var y = 50; var z = --y;
// What is the value of z?
// z is equal to 49

// 5. In a single statement, decrement num and assign its original value to newNum.
var num = 25;
var newNum = num--;

// 7. Assign a number value to a variable. Increment the variable. Display the new value in an alert
var number = 20;
alert(++number);

// Chapter 7 (Math Expression III)

// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum? 
var calculatedNum = 2 + (2 * 6);
// calculatedNum is equal to 14

// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
var calculatedNum = (2 + 2) * 6;
// calculatedNum is equal to 24

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
var calculatedNum = (2 + 2) * (4 + 2)
// calculatedNum is equal to 24

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
var calculatedNum = ((2 + 2) * 4) + 2;
// calculatedNum is equal to 18

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.
var cost = (2 + 2) * (4 + 10);
// cost is equal to 56

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.
var units = 2 + (2 * 4) + 10;
// units is equal to 20

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.
var pressure = 4 / (2 * 4);
// pressure is equal to 0.5

// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.
// num is equal to 22

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// message is equal to Hello,Dolly

// 3. alert("33" + 3);
// What message displays in the alert box?
// Display alert box 333

// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".
alert("Pakistan" + "Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number
var concatenated = "abc" + 10;

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var a = "Hello";
var b = "World";
var c = a + b;
console.log(c)

// Chapter 9 (Prompts)

// 1. Code a prompt with the message &quot;Enter first name&quot;. The user&#39;s response is assigned to firstName.
var fname=prompt("Enter first name");
console.log(fname);

// 2. Code a prompt with the message &quot;Country?&quot; and the default
// answer &quot;China&quot;. The user&#39;s response is assigned to country.
var country = prompt("Country", "China");

// 3. Correct this statement var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.
var userInput = prompt("Please enter your name:", "Ahsan Ahmed");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user&#39;s response to a third variable.
var message = "Please enter your name:";
var defaultResponse = "Ahsan Ahmed";
var userInput = prompt(message, defaultResponse);

// 6. Display a prompt, including both a message and a default
// response. Display the user&#39;s response in an alert.
alert("You entered: " + userInput);
