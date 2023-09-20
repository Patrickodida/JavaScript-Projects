// select the target clasess
const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

// add a click event to the navbar btn
navbarBtn.addEventListener('click', function () {
    // create a varaible to hold the value for the classes to check
    let value = navbarLinks.classList.contains('navbar__collapse');

    // use if statement to check whether the class exixts or not
    if (value) {
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
    } else {
        navbarLinks.classList.add('navbar__collapse');
        navbarBtn.classList.add('change');
    }
})