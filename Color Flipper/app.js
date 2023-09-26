// create a varaible to store the different colors
const colors = ['yellow','blue','rgb(210,146,56)','green','purple','#A5AB56','violet']

// Select the id 'btn' and span class 'color'
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add a click event to the id 'btn' and create a callback function
btn.addEventListener('click', function () {
    // Create a variable to store the number generate from the color array
    let randomNumber = colors[getRandomNumber()];

    // Target the body element to display the background color and the span class 'color' to display the text content of the color
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
})

// create a function to generate random numbers for the color array
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

