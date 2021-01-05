
// create variables
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

//add event that means when the windows loaded, start works the function cursor
window.addEventListener('mousemove', cursor);

//create the 'cursor' function - do sticky the 'cursor' div to the mouse moves
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

//create the the loop that checks when the cursor over the navigation links and do some MAGIC :)

navLinks.forEach(link => {
    link.addEventListener('mousemove', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })


    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })


});