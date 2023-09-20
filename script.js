// select the target classes and elements
    const btns = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    const equalBtn = document.querySelector('.btn-equal');
    const clearBtn = document.querySelector('.btn-clear');

// loop through the buttons
    for(let i = 0; i < btns.length; i++) {

// Add a click even to the buttons
    btns[i].addEventListener('click', function () {

// create a vaiable number to store the button values
    let number = btns[i].getAttribute('data-num');

// display the button values on the screen
    screen.value += number;
    })
    }

// add a click event to the equal button
    equalBtn.addEventListener('click', function () {

// use if statement to alert when the input field is empty
    if (screen.value === '') {
        alert('input is empty');
    } else {
// create a variable to evaluate the screen value
        let value = eval(screen.value);
// display the evaluated value
        screen.value = value;
        }   
    })


// add a click event to the clear button
    clearBtn.addEventListener('click', function () {

// clear the screen
        screen.value = '';
    })