// Select the toggle button and links class
const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Add a click event to the toggle button
toggleBtn.addEventListener('click', function () {
    // check whether the class exists or not and toggle the button
    /* if(links.classList.contains('show-links')) {
        links.classList.remove('show-links')
    } else {
        links.classList.add('show-links')
    } */
// Instead of using an if statement you could as well just say the following
    links.classList.toggle('show-links');
})