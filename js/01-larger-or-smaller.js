// Creating global variables
let num1 = parseInt(prompt("Enter an integer"));
let num2 = parseInt(prompt("Enter one more integer"));

// The result of the application execution
if (num1 > num2) {
    document.write(num1);
} else if (num2 > num1) {
    document.write(num2);
} else {
    document.write("The integers are equal");
}