// Create a variable to store the hex numbers 
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// Select the id 'btn' and span class 'color' 
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Add a click event to id 'btn' and create a callback function 
btn.addEventListener('click', function () {
    // Create a variable to store the hex '#'
    let hexColor = '#';

    // Loop through the hexNumbers array and generate 6 hex digits
    for(let i = 0; i < 6; i++) {
        // Add the hex numbers generated to the hexColor'#'
        hexColor += hexNumbers[getRandomNumber()];
    }
    // Target the body element display the random background color and the span class 'color' to display the random textContent(color hex)
    document.body.style.background = hexColor;
    color.textContent = hexColor;
    console.log(hexColor)
})

// Create a function to generate the hex Numbers 
function getRandomNumber() {
    return Math.floor(Math.random() * hexNumbers.length);
}
