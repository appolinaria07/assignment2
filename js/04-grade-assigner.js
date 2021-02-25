let score = prompt("Enter a number between 1 and 100");

if (score < 1 || score > 100) {
    alert("Only numbers between 1 and 100 are accepted");
    let score = prompt("Enter a number between 1 and 100");               // runs the cycle 2d time if the score changes
    if (score >= 90 && score <= 100) {
        window.console.log("You received an A");
    } else if (score >=80 && score <= 89) {
        window.console.log("You received a B");
    } else if (score >=70 && score <= 79) {
        window.console.log("You received a C");
    } else if (score >=60 && score <= 69) {
        window.console.log("You received a D");
    } else {
        window.console.log("You received an F");
    }
} else {                                                              // runs the cycle 1st time if the score is between 1 and 100
    if (score >= 90 && score <= 100) {
        window.console.log("You received an A");
    } else if (score >=80 && score <= 89) {
        window.console.log("You received a B");
    } else if (score >=70 && score <= 79) {
        window.console.log("You received a C");
    } else if (score >=60 && score <= 69) {
        window.console.log("You received a D");
    } else {
        window.console.log("You received an F");
    }
}



