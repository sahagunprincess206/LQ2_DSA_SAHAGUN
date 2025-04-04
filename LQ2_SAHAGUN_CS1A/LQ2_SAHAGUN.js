// I. Code Transformation  

// I.1 Convert Conditional Statement into a Conditional Ternary  

// A - Check if the student meets age and general average requirements
let age = 19;
let genAverage = 87;

let ternary = age >= 19 && genAverage >= 87 ?
  "You may enter College, under BSCS Program" :
  "Both conditions may have not met and not allowed to enroll";

console.log(ternary);

// B - Check subject and grade requirements
let subject = "DSA";
let grade = 80;

let ternary2 = subject === "DSA" && grade >= 80 ?
  "You may enroll Application Development" :
  subject === "Math101" && grade <= 80 ?
  "You may enroll Calculus" :
  "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus";

console.log(ternary2);

// I.2 Converting Ternary into Regular Conditional Statement  

// Check the voter eligibility  
if (age >= 18) {
  console.log("You may now Register as a Voter for Elections 2025");
} else {
  console.log("You are too young to register as a voter for Elections 2025");
}

// Determine the eligible course on the  enrollment  
if (genAverage >= 85) {
  console.log("You may enroll in all Course Programs");
} else if (genAverage > 82) {
  console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
  console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}

// 1.3 Convert the for loop into the while loop

let fname = "Jose Cruz";
let c = 2;
let i = 0;

while (fname.length > i) {
  let nLengthCounterTwo = fname.length - c;
  console.log(fname);
  console.log("Iterations Name was Printed: " + i);
  i++;
}

console.log("\n");

//  II. Code Snippet (User Registration & Login)

let username = prompt("Register your Username: "); // Declare username variable
let password = prompt("Register your passcode: "); // Declare password variable
let rePassword = prompt("Re-enter your passcode: "); // Declare re-password variable

if (password === rePassword) {
  alert("Congratulations! You have successfully registered.");
  
  let loginUsername = prompt("Username: "); // Username input 
  let loginPassword = prompt("Password: "); // Password input 
  
  if (loginUsername === username) {
    if (loginPassword === password) {
      alert("Welcome to DSA, " + username);
    } else {
      alert("Incorrect Password, Re-run the code!");
    }
  } else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
  alert("Password does not Match, Re-run the code!");
}

console.log("\n");

//  III. Coding Problem (Course Selection)

// Asking the user input 
let name = prompt("Enter your Name: ");
let address = prompt("Enter your Address: ");
let age = parseInt(prompt("Enter your Age: "));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher): ");
let course = prompt("Enter your Course (BSCS, BSM, BAEL): ");

console.log("\n");

// Course verification
if (course === "BSCS" || course === "BSM" || course === "BAEL") {
  console.log("You are enrolled in " + course);
  
  // Checking class role eligibility for the selected course
  if (classRole === "Officer" || classRole === "Student" || classRole === "Teacher") {
    console.log("Your role in class is: " + classRole);
  } else {
    console.log("Invalid class role. Defaulting to 'Student'.");
    classRole = "Student";
  }
} else {
  console.log("Invalid Course Selected.");
}

console.log("\n");

// Looping based on Age / 4
let iterations = Math.floor(age / 4);
let counter = 0;

while (counter < iterations) {
  console.log(name + " - Iteration " + (counter + 1));
  counter++;
}