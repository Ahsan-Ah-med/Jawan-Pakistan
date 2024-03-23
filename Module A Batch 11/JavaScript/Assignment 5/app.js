// chapters21-25.pdf
// STRING METHODS

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoritePhoneModel.length;
document.write("My favorite phone is: " + favoritePhoneModel + "<br>");
document.write("Length of the string: " + inputLength);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var word = "Pakistani";
var index = word.indexOf("n");
document.write("<br>The index of 'n' in the word 'Pakistani' is: " + index);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write(
  "<br>The last index of 'l' in the word 'Hello World' is: " + lastIndex
);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var word = "Pakistani";
var characterAtIndex3 = word[3];
document.write(
  "<br>The character at the 3rd index in the word 'Pakistani' is: " +
    characterAtIndex3
);

// 6. Repeat Q1 using string concat() method.
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome.");

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var word = "Hyderabad";
var modifiedWord = word.replace("Hyder", "Islam");
document.write("<br>Original word: " + word + "<br>");
document.write("<br>Modified word: " + modifiedWord);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.replace(/and/g, "&");
document.write("<br>Original message: " + message + "<br>");
document.write("<br>Modified message: " + modifiedMessage);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var str = "472";
var num = parseInt(str);
document.write("<br>Original string: " + str + "<br>");
document.write("<br>Type of original string: " + typeof str + "<br>");
document.write("<br>Converted number: " + num + "<br>");
document.write("<br>Type of converted number: " + typeof num);

// 10. Write a program that takes user input. Convert and show the input in capital letters.
var userInput = prompt("Enter a string:");
var capitalizedInput = userInput.toUpperCase();
alert("Capitalized input: " + capitalizedInput);

// 11. Write a program that takes user input. Convert and show the input in title case.
var userInput = prompt("Enter a string:");
var words = userInput.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCaseInput = words.join(" ");
alert("Title case input: " + titleCaseInput);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var numAsString = num.toString().replace(".", "");
document.write("Number as string without dot: " + numAsString);

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var username = prompt("Enter your username:");
var isValid = true;
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);

  if (
    charCode === 33 ||
    charCode === 44 ||
    charCode === 46 ||
    charCode === 64
  ) {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username without special symbols [@, ., , !].");
} else {
  alert("Username '" + username + "' is valid.");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:").toLowerCase();
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;
    break;
  }
}
if (found) {
  alert("Yes, '" + userInput + "' is found in the list.");
} else {
  alert("No, '" + userInput + "' is not found in the list.");
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter your password:");
var isValid = true;
if (
  password.length < 6 ||
  !(
    (password[0] >= "a" && password[0] <= "z") ||
    (password[0] >= "A" && password[0] <= "Z")
  )
) {
  isValid = false;
} else {
  var hasLetter = false;
  var hasDigit = false;

  for (var i = 0; i < password.length; i++) {
    if (
      (password[i] >= "a" && password[i] <= "z") ||
      (password[i] >= "A" && password[i] <= "Z")
    ) {
      hasLetter = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      hasDigit = true;
    }

    if (hasLetter && hasDigit) {
      break;
    }
  }

  if (!hasLetter || !hasDigit) {
    isValid = false;
  }
}
if (!isValid) {
  alert(
    "Please enter a valid password that contains at least 6 characters, starts with a letter, and contains both letters and numbers."
  );
} else {
  alert("Password is valid.");
}

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University of Karachi";
var universityArray = university.split(" ");
for (var i = 0; i < universityArray.length; i++) {
  document.write("<br>Element " + (i + 1) + ": " + universityArray[i] + "<br>");
}

// 17. Write a program to display the last character of a user input.
var userInput = prompt("Enter a string:");
var lastCharacter = userInput[userInput.length - 1];
alert("Last character of the input: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var words = lowercaseSentence.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}
alert("Number of occurrences of 'the': " + count);

// Questions PDF 21-25.docx
// Chapter 21 (Changing Case)

// 1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase; Note: Correct this statement by yourself.
var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the result to the same variable.
x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the result to the same variable.
y = y.toUpperCase();

// 4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn&#39;t been declared beforehand.
var originalString = "YourStringHere";
var lowerCaseString = originalString.toLowerCase();

// 5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn&#39;t been declared beforehand.
var array = ["Your", "Array", "Here"];
var lowerCaseElement = array[0].toLowerCase();

// 6. Display in an alert the upper-case version of the string represented by a variable.
var someString = "YourStringHere";
alert(someString.toUpperCase());

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is the writing
// of a word with its first letter in uppercase and the remaining letters in lowercase.
var cityName = "kaRacHi";
var capitalizedCityName =
  cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
alert(capitalizedCityName);

// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 2. The number of characters in the string will be assigned to the variable.
var str = "yourStringHere";
var numberOfCharacters = str.length;

// 3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn&#39;t been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2, 6);

// 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
var str = "yourStringHere";
var numberOfCharacters = str.length;

// 5. In a first statement measure how many characters there are in a  string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn&#39;t been declared beforehand.
var str = "yourStringHere";
var numberOfCharacters = str.length;
var slicedString = str.slice(1, -3);

// 6. var text = "To be or not to be."; var indx = text.indexOf("be"); What is the value of indx?
var text = "To be or not to be.";
var indx = text.indexOf("be");

// 7. var text = "To be or not to be."; var indx = text.lastIndexOf("be"); What is the value of indx?
// Note: Try the above both examples by yourself.
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn&#39;t been declared beforehand.
var text = "yourTextHere";
var indx = text.lastIndexOf("go");

// 9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (indexNum >= 0) {
}

// 10. In this string "abcde", what character is at index 2? (Use charAt)
var str = "abcde";
var characterAtIndex2 = str.charAt(2);

// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn&#39;t been declared beforehand.
var text = "yourTextHere";
var cha = text.charAt(9);

// 12. Find the last character in the string represented by str and assign it to x, which hasn&#39;t been declared beforehand.
var str = "yourStringHere";
var x = str.charAt(str.length - 1);

// 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn&#39;t been declared beforehand.
var input = "yourStringHere";
var cha = input.charAt(4);
