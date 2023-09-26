    // create a variable to initialize the count
    let count = 0;

    // Select the buttons(btns) and the id 'value'
    const value = document.querySelector('#value');
    const btns = document.querySelectorAll('.btn');

    // Loop through the buttons using a forEach method and Add a click event to the button
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;

    // Use if statements to check whether the current target event contains the classList and either decrease, increase or reset the counter.
            if(styles.contains('decrease')){
                count--; 
            } else if(styles.contains('increase')) {
                count++;
            } else {
                count = 0;
            }

    // use if statments to change the colors of the different counts
            value.style.color = count > 0 ? '#016801' : count < 0 ? '#d80b0b' : '#222';

    // Display the count
            value.textContent = count;

    // Add an animation to the count
            value.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
        })
    })