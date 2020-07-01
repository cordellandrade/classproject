// Gives user a greeting based on time of the day

function addGreeting() {
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
return document.write('<h3>' + greeting + '</h3>');
}

// Asks user what their name is and provides output 

function askName() {
    var userName = prompt('What is your name?');

    return document.write('<h3>'+'Hello, ' + userName + '</h3>');

}

// Asks size of dog

function askPreference() {
var response = prompt('Is your dog\'s size small, medium, or large?');

var message;

if(response === 'small'){
    message = 'Small dog full spa priced at $25';
} else if (response === 'medium'){
    message = 'Medium dog full spa priced at $45';
} else if (response === 'large'){
    message = 'Large dog full spa priced at $65';
}   else if (response === 'Small'){
        message = 'Small dog full spa priced at $25';
    } else if (response === 'Medium'){
        message = 'Medium dog full spa priced at $45';
    } else if (response === 'Large'){
        message = 'Large dog full spa priced at $65';
    } else {
    message = 'Please refresh page and input size of your dog';
}
return document.write('<h3>' + message + '</h3>')
}





