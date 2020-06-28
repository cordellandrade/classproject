
var response = prompt('Is your dog\'s size small, medium, or large?');

var message;

if(response === 'small'){
    message = 'Small dog full spa priced at $25';
} else if (response === 'medium'){
    message = 'Medium dog full spa priced at $45';
} else if (response === 'large'){
    message = 'Large dog full spa priced at $65';
} else {
    message = 'What size is your dog?';
}
document.write('<h3>' + message + '</h3>')