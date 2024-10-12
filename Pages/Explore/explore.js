// const canvas = document.getElementById('canvas');

// canvas.addEventListener("click",() => {

// });

document
  .getElementById("button-explore")
  .addEventListener("mouseenter", function onEnt() {
    console.log("mouse enter");
    const blackArr = document.getElementById("arrow-right-black");
    const whiteArr = document.getElementById("arrow-right-white");
    blackArr.style.opacity = 0;
    whiteArr.style.opacity = 1;
  });

document
  .getElementById("button-explore")
  .addEventListener("mouseleave", function onLeave() {
    console.log("mouse leave");
    const blackArr = document.getElementById("arrow-right-black");
    const whiteArr = document.getElementById("arrow-right-white");
    blackArr.style.opacity = 1;
    whiteArr.style.opacity = 0;
  });
