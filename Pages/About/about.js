// let currentSection = 0;
// const sections = document.querySelectorAll('section');
// const totalSections = sections.length;

// function scrollToSection(index) {
//     sections[index].scrollIntoView({ behavior: 'smooth' });
// }

// function handleScroll(event) {
//     event.preventDefault();

//     if (event.deltaY > 0) {
//         // Scroll down
//         if (currentSection < totalSections - 1) {
//             currentSection++;
//             scrollToSection(currentSection);
//         }
//     } else {
//         // Scroll up
//         if (currentSection > 0) {
//             currentSection--;
//             scrollToSection(currentSection);
//         }
//     }
// }

// window.addEventListener('wheel', handleScroll, { passive: false });

let bg2 = document.getElementById('bg2');
let mission = document.getElementById('mission');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    mission.style.marginTop = value * 0.15 + 'vh';
    bg2.style.marginTop = value * -0.1 + 'vh';
    hill2.style.left = value * -0.3 + 'vh';
    hill4.style.left = value * -0.3 + 'vh';
    hill5.style.left = value * 0.5 + 'vh';
});

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || doucment.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top = "-17vh";
        
    }
    else{
        console.log("masuk");
        navbar.style.top= "0";
    }
    lastScrollTop = scrollTop;
})