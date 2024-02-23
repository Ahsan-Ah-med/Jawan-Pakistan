// Class Assignment # 14
// JavaScript Assignment # 1

// Word Document = chapter 1-3.docx

//1. Alert these following (individually):
// I. First Name
alert("Ahsan");

// II. Last Name
alert("Ahmed");

// III. Email
alert("Ahsan.Ahmed.026@gmail.com");

// IV. Phone Number 
alert("+923322637288");

// V. Password
alert("password");

// 2. Correct this statement: alert &quot;You&#39;re learning JavaScript!&quot; ;
alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.
alert("Assignment # 14 \n JavaScript Assignment # 1");

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land..");


// Chapter 2 (Variables for string)

// 1. Declare any variable in the camel Case format.
var firstName;

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var myVariable;
myVariable = "My String Variable";

// 3. Declare the variable teamName and Alert your Team name.
var teamName = "PHONTOMS CC";
alert(teamName)

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Charlie";
bestMan = "Charlie Chaplin";

// Chapter 3 (Variables for numbers)

// 1. Declare a variable “caseQty”
var caseQty;

// 2. Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = "9";
var num = Number(num);

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sum;
sum = 6 + 3;

// 5. What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log("Order Total Is: " + orderTotal)

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var number = 20;
number = number + 5;
console.log(number);



// PDF Document  CHAPTER ALERT: 

// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome To My Website!");

// 2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land.. \n Happy Coding!");

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land..");
alert("Happy Coding! \n Prevent this page from creating additional dialogs.");

// 5. Generate the following message through browser’s developer console:
alert("Hello.. I can run JS through my web browser's console");
console.log("Hello.. I can run JS through my web browser's console");


// 6. Make use of alerts in your new/existing HTML & CSS project.
// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// PDF Document  CHAPTER VARIABLES FOR STRINGS: 

// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Ahsan Ahmed";
console.log(myName);

// 3. Write script to
// a) Declare a JS variable, titled message.
var message;
// b) Assign “Hello World” to variable message
message = "Hello World";
// c) Display the message in alert box.
alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var fullname = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(fullname);
alert(age);
alert(course);

// 5. Write a script to display the following alert using one JS variable:
var pizza = ("PIZZA\nPIZZ\nPIZ\nPI\nP");
alert(pizza);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "Ahsan.Ahmed.026@gmail.com";
alert("My email address is " + email);


// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript.");

// 9. Store following string in a variable and show in alert and browser through JS
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


// PDF Document  CHAPTER VARIABLES FOR NUMBERS:


// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "I am 24 years old"
alert(age)

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var time = Math.round(Math.random() * 10 + 1);
console.log(time);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthyear = 2000;
document.write("<br> My birthyear is " + birthyear + " <br> Data type of my declared variable is " + typeof (birthyear));

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorname = "John Doe";
var product = "Tshirt";
var quantity = 5;
document.write("<br>" + "<strong>" + visitorname + "</strong>" + " ordered "  + "<strong>" + quantity + product + "</strong>" + " on XYZ clothing store");
