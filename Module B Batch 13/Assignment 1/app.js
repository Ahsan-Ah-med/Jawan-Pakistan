// Question 1
// Write a program to create your own biodata using template literals, let, and const. The output should be displayed using document.write().

const name = "Ahsan Ahmed";
const age = 24;
const occupation = "Frontend Developer";
const email = "Ahsan.Ahmed.026@gmail.com";
const phoneNumber = "03322637288";
const instituteName = "Jawan Pakistan";
const education = "Undergraduate";

document.write(`
            <p>Name: ${name}</p>
            <p>Age: ${age}</p>
            <p>Occupation: ${occupation}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Institute Name: ${instituteName}</p>
            <p>Education: ${education}</p>
        `);

// Question 2
// Write a program for a basic mark sheet using JavaScript to store marks for different subjects, calculate the total marks, percentage, and grade, and display the results using document.write().

const subject1 = "Math";
const subject2 = "Physics";
const subject3 = "Chemistry";

let marks1 = 85;
let marks2 = 78;
let marks3 = 92;

const totalMarks = 300;
let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

document.write(`
            <p>Subject 1: ${subject1}, Marks: ${marks1}</p>
            <p>Subject 2: ${subject2}, Marks: ${marks2}</p>
            <p>Subject 3: ${subject3}, Marks: ${marks3}</p>
            <p>Total Marks: ${obtainedMarks} / ${totalMarks}</p>
            <p>Percentage: ${percentage}%</p>
            <p>Grade: ${grade}</p>
        `);

// Question 2 
// Students using this below image you have to create each variable keyword apply at least one
// example for tasks executing.I share the output everyone must same as in the image.

// Demonstrating var
console.log("// var");
// Reinitialize (y)
var a = "Ahsan";
var a;
var a = "Ahmed";
console.log(a);

// Reassign (y)
a = "Ahsan";
console.log(a);

// Function scope var keyword
function abc() {
    var a = "Ahmed";
    console.log(a);
}
abc();

// Demonstrating let
console.log("// let");
let b = "Ahsan";
// let b; // Uncommenting this line will cause an error (let cannot be redeclared)
b = "Ahmed"; // Reassign
console.log(b);

// Block scope
if (true) {
    let b = "Block Scoped";
    console.log(b);
}
console.log(b);

// Demonstrating const
console.log("// const");
const c = "Ahsan";
// const c; // Uncommenting this line will cause an error (const must be initialized)
// c = "Ahmed"; // Uncommenting this line will cause an error (const cannot be reassigned)
console.log(c);

// Block scope
if (true) {
    const c = "Block Scoped";
    console.log(c);
}
console.log(c);

// Hoisting behavior (var only)
console.log("// Hoisting");
console.log(d); // undefined, due to hoisting
var d = "Hoisted";
console.log(d);

// let and const are not hoisted in the same way
// console.log(e); // Uncommenting this line will cause an error (ReferenceError: Cannot access 'e' before initialization)
let e = "Not hoisted";
console.log(e);