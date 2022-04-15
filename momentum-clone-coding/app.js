const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age <= 0) {
   console.log("Please write a number");
} else if (age >= 19 && age <= 50) {
   console.log("Pass");
} else {
   console.log("Fail");
}
