function dogVisits() {
var count;
var message;
while (isNaN(count)) {
    count = prompt ('How many times has your dog came to visit our spa this month?');
    if(count < 2) {
        message = 'Bring your dog in for a spa day!';
    } else {
        message = 'Thank you for being such a loyal customer!'
    }
    
       return document.write('<h3>' + message + '</h3>')
    }
}

