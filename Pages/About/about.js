let bg2 = document.getElementById('bg2');
let mission = document.getElementById('mission');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Add a flag to track if the container is in view
let isContainerInView = false;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Parallax scrolling effects for the first section
    mission.style.marginTop = value * 0.15 + 'vh';
    bg2.style.marginTop = value * -0.1 + 'vh';
    hill2.style.left = value * -0.3 + 'vh';
    hill4.style.left = value * -0.3 + 'vh';
    hill5.style.left = value * 0.5 + 'vh';

    // Get reference to the sections and container
    const firstSection = document.querySelector('.first');
    const secondSection = document.querySelector('.second');
    const thirdSection = document.querySelector('.third');
    const container = document.querySelector('.container');

    const scrollTop = window.scrollY;
    const scrollBottom = scrollTop + window.innerHeight; // Bottom of the viewport

    const secondTop = secondSection.offsetTop;
    const secondBottom = secondTop + secondSection.offsetHeight;

    // Check if the viewport is within the second section
    if (scrollBottom > secondTop + (secondSection.offsetHeight / 2) && scrollTop < secondBottom - (secondSection.offsetHeight / 2)) {
        if (!isContainerInView) {
            // Trigger the appearance animation by moving container into view
            container.style.transform = 'translateX(0)';
            isContainerInView = true; // Set flag to true
        }
    } else {
        if (isContainerInView) {
            // Move container back to the left corner when scrolling to first or third section
            container.style.transform = 'translateX(-100vw)';
            isContainerInView = false; // Set flag to false
        }
    }
});

// Navbar scroll hide/show logic
var lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-17vh"; // Hide navbar on scroll down
    } else {
        navbar.style.top = "0"; // Show navbar on scroll up
    }
    lastScrollTop = scrollTop;
});


document.querySelector('.container').addEventListener('mouseover', function() {
    document.querySelector('.bulb').classList.add('highlight');
});

document.querySelector('.container').addEventListener('mouseout', function() {
    document.querySelector('.bulb').classList.remove('highlight');
});
