var count;
var message;
while (isNaN(count)) {
    count = prompt ('How many times have your dog came to our spa this month?');
    if(count < 1) {
        message = 'Bring your dog in for a spa day!';
        document.write('<h3>' + message + '</h3>')
    }
}