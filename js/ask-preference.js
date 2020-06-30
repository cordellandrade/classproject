
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
document.write('<h3>' + message + '</h3>')

// Asks user what size their dog is