// chapters14-16.pdf
// ARRAYS

// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
var stringsArray = ["apple", "banana", "orange"];

// 4. Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, true];

// 6. Declare and initialize a mixed array.
var mixedArray = ["apple", 2, true, "banana", false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
document.addEventListener("DOMContentLoaded", function () {
  var qualificationsArray = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD",
  ];
  var qualificationsList = document.getElementById("qualificationsList");
  qualificationsArray.forEach(function (qualification) {
    var listItem = document.createElement("li");
    listItem.textContent = qualification;
    qualificationsList.appendChild(listItem);
  });
});

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Function to calculate percentage
function calculatePercentage(score, totalMarks) {
  return (score / totalMarks) * 100;
}

// Array to store student names
var studentNames = ["Alice", "Bob", "Charlie"];

// Array to store scores of students
var studentScores = [320, 230, 480]; // Scores out of 500 for each student

// Total marks for each student
var totalMarks = 500;

// Displaying scores and percentages
for (var i = 0; i < studentNames.length; i++) {
  var percentage = calculatePercentage(studentScores[i], totalMarks);
  document.write(
    "Score of " +
      studentNames[i] +
      "is" +
      studentScores[i] +
      ", " +
      percentage.toFixed(0) +
      "%. <br/>"
  );
}

// 9. Initialize an array with color names. Display the arrayelements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.

// Initialize an array with color names
var colorsArray = ["Red", "Green", "Blue"];

// Display the array elements
document.write("<h3>Initial Array:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
var newColorBegin = prompt("Enter a color to add to the beginning:");
colorsArray.unshift(newColorBegin);

// Display the updated array
document.write("<h3>Array after adding color to the beginning:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
var newColorEnd = prompt("Enter a color to add to the end:");
colorsArray.push(newColorEnd);

// Display the updated array
document.write("<h3>Array after adding color to the end:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// c. Add two more colors to the beginning of the array.
colorsArray.unshift("Purple", "Yellow");

// Display the updated array
document.write("<h3>Array after adding two colors to the beginning:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// d. Delete the first color in the array.
colorsArray.shift();

// Display the updated array
document.write("<h3>Array after deleting the first color:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// e. Delete the last color in the array.
colorsArray.pop();

// Display the updated array
document.write("<h3>Array after deleting the last color:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// f. Ask the user at which index he/she wants to add a color & color name.
var insertIndex = parseInt(
  prompt("Enter the index where you want to add a color:")
);
var newColor = prompt("Enter the color name:");
colorsArray.splice(insertIndex, 0, newColor);

// Display the updated array
document.write("<h3>Array after adding a color at a desired position:</h3>");
document.write(colorsArray.join(", ") + "<br><br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
var deleteIndex = parseInt(
  prompt("Enter the index from where you want to delete color(s):")
);
var numToDelete = parseInt(
  prompt("Enter the number of colors you want to delete:")
);
colorsArray.splice(deleteIndex, numToDelete);

// Display the updated array
document.write(
  "<h3>Array after deleting color(s) from user-defined position:</h3>"
);
document.write(colorsArray.join(", ") + "<br><br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// Array to store student scores
var studentScores = [85, 67, 92, 78, 88, 95, 72, 81];

// Sorting the array in ascending order
studentScores.sort(function (a, b) {
  return a - b;
});

// Displaying the sorted array
console.log("Student Scores in Ascending Order:");
console.log(studentScores);

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// Initialize an array with city names
var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Copying 3 array elements from cities array to selectedCities array
var selectedCities = cities.slice(2, 5);

// Displaying the selected cities
console.log("Selected Cities:");
console.log(selectedCities);

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Array containing strings
var arr = ["This", "is", "my", "cat"];

// Concatenating all elements into a single string using join method
var singleString = arr.join(" ");

// Displaying the single string
console.log(singleString);

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
// Start building the HTML select dropdown
var selectDropdown = '<select id="manufacturerSelect">';

// Iterate over the phone manufacturers array and add options to the dropdown
for (var i = 0; i < phoneManufacturers.length; i++) {
  selectDropdown +=
    '<option value="' +
    phoneManufacturers[i] +
    '">' +
    phoneManufacturers[i] +
    "</option>";
}

// Close the select tag
selectDropdown += "</select>";

// Display the select dropdown in the browser
document.write(selectDropdown);

// chapters17-20.pdf
// ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var MultiArray = [[], [], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// Take input from the user for the table number and length
var tableNumber = parseInt(
  prompt("Enter the number for the multiplication table:")
);
var tableLength = parseInt(
  prompt("Enter the length of the multiplication table:")
);

// Print the multiplication table
console.log(
  "Multiplication Table for " + tableNumber + " (Length: " + tableLength + "):"
);
for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " X " + i + " = " + tableNumber * i);
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// Array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Loop to print each item of the array
console.log("Fruits:");
for (var i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting: 1, 2, 3, ..., 15
console.log("a. Counting:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting: 10, 9, 8, ..., 1
console.log("\nb. Reverse counting:");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even: 0, 2, 4, ..., 20
console.log("\nc. Even:");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}

// d. Odd: 1, 3, 5, ..., 19
console.log("\nd. Odd:");
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}

// e. Series: 2k, 4k, ..., 20k
console.log("\ne. Series:");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// Given array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
  // Convert the item to lowercase for case-insensitive search
  var lowerCaseItem = item.toLowerCase();

  // Check if the item is found in the array
  for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowerCaseItem) {
      return true; // Item found
    }
  }
  return false; // Item not found
}

// Prompt user for input
var userInput = prompt("Enter an item to search:");

// Search for the item
var isFound = searchItem(userInput);

// Display the result
if (isFound) {
  alert("Yes, '" + userInput + "' is found in the list.");
} else {
  alert("No, '" + userInput + "' is not found in the list.");
}

// Given array
var A = [24, 53, 78, 91, 12];
// Initialize a variable to store the maximum number
var maxNumber = A[0];
// Loop through the array to find the maximum number
for (var i = 1; i < A.length; i++) {
  if (A[i] > maxNumber) {
    maxNumber = A[i];
  }
}
// Display the largest number
console.log("The largest number in the array is: " + maxNumber);

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// Given array
var A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
var minNumber = A[0]; // Assume the first number is the minimum
// Loop through the array to find the smallest number
for (var i = 1; i < A.length; i++) {
  if (A[i] < minNumber) {
    minNumber = A[i]; // Update minNumber if a smaller number is found
  }
}
// Display the smallest number
console.log("The smallest number in the array is: " + minNumber);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// Loop to print multiples of 5 ranging from 1 to 100
console.log("Multiples of 5 from 1 to 100:");
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
