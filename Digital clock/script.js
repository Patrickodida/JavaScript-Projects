// create a function to show time

function showTime () {

// create a varaible to store the current date
    let date = new Date();

// create variables to store current hours, minutes and seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

// create a variable to store the format hours either 'AM' OR 'PM'
    let formatHours = convertFormat(hours);

// variable to check time and convert it to 12 hour clock
    hours = checkTime (hours);

// variable to add zero if the time is less than 10
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    // display the clock in the format below
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}



// create a function to convert format to either 'AM' when the time is below 12 'oclock or 'PM'  when time is 12 or greater than 12 o'clock
function convertFormat (time) {
    // create a variable to store the converted time 
    let format = 'AM';
// Use the if statement to check the time
if (time >= 12) {
    format = 'PM';
}
    return format;
}

// create a function to check time and convert it to 12 hour clock
function checkTime (time) {
    // Use the if statement to check whether the time is past 12 and if so subtract 12 from the current time
    if (time > 12) {
        time -= 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

// create a function to check the time and add zero before the number, if the time below 10.
function addZero (time) {
// use the if statement to check the time and add a zero if time is less than 10
if (time < 10) {
    time = '0' + time;
}
return time;
}

showTime();
setInterval(showTime, 1000);


