// Select the toggle button, sidebar and the close button
const toggleBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// Add a click event to the toggle btn to show the sidebar
toggleBtn.addEventListener('click', function () {
    if(sideBar.classList.contains('show-sidebar')) {
        sideBar.classList.remove('show-sidebar')
    } else {
        sideBar.classList.add('show-sidebar')
    }
})
// Add a click event to the close button to remove the sidebar
closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('show-sidebar');
})