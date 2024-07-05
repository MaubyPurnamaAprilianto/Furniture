window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})



// Add JavaScript to handle menu toggle
document.getElementById('menu-toggle').addEventListener('change', function () {
    var menuIcon = document.querySelector('.menu-icon');
    if (this.checked) {
        menuIcon.innerHTML = '&#10005;'; // Unicode character for 'X' symbol
    } else {
        menuIcon.innerHTML = '&#9776;'; // Unicode character for three horizontal lines
    }
});