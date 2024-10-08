const parallaxArr = document.querySelectorAll(".parallax");
let xValue = 0,
  yValue = 0;

let rDeg = 0;

function updateParallax(cursorPos) {
  parallaxArr.forEach((el) => {
    let speedx = el.dataset.speedx,
      speedy = el.dataset.speedy,
      speedz = el.dataset.speedz;
    let isLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      cursorPos - parseFloat(getComputedStyle(el).left) * isLeft * 0.01;

    let rotateSpeed = el.dataset.rotation;

    el.style.transform = `translateX(calc(-50% + ${
      xValue * speedx
    }px)) translateY(calc(-50% + ${
      yValue * speedy
    }px)) perspective(2500px) translateZ(${zValue * speedz}px) rotateY(${
      rDeg * rotateSpeed
    }deg)`;
  });
}

window.addEventListener("mousemove", (e) => {
  if (timeLine.isActive()) return;
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rDeg = (xValue / (window.innerWidth / 2)) * 20;

  updateParallax(e.clientX);
});

let prevScroll = window.scrollY;
const titleTexts = document.querySelector(".title-text");
const cliffLeft = document.querySelector(".cliff-left");

const cliffRight = document.querySelector(".cliff-right");
const cliffAd = document.querySelector(".cliff-adventure");
const ad = document.querySelector(".adventure");
const homeFloor = document.querySelector(".home-floor");
const rockAd = document.querySelector(".rock-adventure");
const initialCliffLeft = parseFloat(getComputedStyle(cliffLeft).left);
const initialCliffAd = getComputedStyle(cliffAd).bottom;
const initialAd = parseFloat(getComputedStyle(ad).bottom);
const initialRockAd = parseFloat(getComputedStyle(rockAd).bottom);
const initialCliffRight = parseFloat(getComputedStyle(cliffRight).right);
const initialHomeFloor = parseFloat(getComputedStyle(homeFloor).top);
window.addEventListener("scroll", () => {
  let valueY = window.scrollY + window.innerWidth / 2;
  let valY = window.scrollY;
  titleTexts.style.left = valueY + "px";
  if (initialCliffLeft < 0 && prevScroll < valY) {
    cliffLeft.style.left = initialCliffLeft - valY * 0.9 + "px";
  } else if (initialCliffLeft < 0 && prevScroll > valY) {
    cliffLeft.style.left = initialCliffLeft + valY * 0.9 + "px";
  } else {
    cliffLeft.style.left = initialCliffLeft - valY * 0.9 + "px";
  }

  if (initialCliffRight < 0 && prevScroll < valY) {
    cliffRight.style.right = initialCliffRight - valY * 0.4 + "px";
  } else if (initialCliffRight < 0 && prevScroll > valY) {
    cliffRight.style.right = initialCliffRight + valY * 0.4 + "px";
  } else {
    cliffRight.style.right = initialCliffRight - valY * 0.4 + "px";
  }

  if (initialCliffAd < 0 && prevScroll < valY) {
    cliffAd.style.bottom = `calc(${initialCliffAd} - ${valY * 0.5}px)`;
  } else if (initialCliffAd < 0 && prevScroll > valY) {
    cliffAd.style.bottom = `calc(${initialCliffAd} + ${valY * 0.5}px)`;
  } else {
    cliffAd.style.bottom = `calc(${initialCliffAd} - ${valY * 0.5}px)`;
  }

  if (initialAd < 0 && prevScroll < valY) {
    ad.style.bottom = initialAd - valY * 0.4 + "px";
  } else if (initialAd < 0 && prevScroll > valY) {
    ad.style.bottom = initialAd + valY * 0.4 + "px";
  } else {
    ad.style.bottom = initialAd - valY * 0.4 + "px";
  }

  if (initialRockAd < 0 && prevScroll < valY) {
    rockAd.style.bottom = initialRockAd - valY * 0.4 + "px";
  } else if (initialRockAd < 0 && prevScroll > valY) {
    rockAd.style.bottom = initialRockAd + valY * 0.4 + "px";
  } else {
    rockAd.style.bottom = initialRockAd - valY * 0.4 + "px";
  }

  if (initialHomeFloor < 0 && prevScroll < valY) {
    homeFloor.style.top = initialHomeFloor - valY * 0.2 + "px";
  } else if (initialHomeFloor < 0 && prevScroll > valY) {
    homeFloor.style.top = initialHomeFloor + valY * 0.2 + "px";
  } else {
    homeFloor.style.top = initialHomeFloor + valY * 0.2 + "px";
  }
});

updateParallax(0);

let timeLine = gsap.timeline();

// Array.from(parallaxArr)
//   .filter(
//     (el) =>
//       !el.classList.contains("bg-img") && !el.classList.contains("title-text")
//   )
//   .forEach((el) => {
//     timeLine.from(
//       el,
//       {
//         top: `${el.offsetHeight + el.dataset.distance}px`,
//         duration: 3.5,
//         ease: "power4.out",
//       },
//       "0"
//     );
//   });

timeLine
  .from(
    ".title-text h1",
    {
      y:
        window.innerHeight -
        document.querySelector(".title-text h1").getBoundingClientRect().top,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".title-text h2",
    {
      y: -150,
      opacity: 0,
      duration: 2.5,
    },
    "2"
  )
  .from(
    ".cliff-left",
    {
      x: -1000,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".cliff-right",
    {
      x: 1000,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".adventure",
    {
      y: 750,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".cliff-adventure",
    {
      x: -800,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".rock-adventure",
    {
      x: 900,
      duration: 2.5,
    },
    "1"
  )
  .from(
    ".hides",
    {
      opacity: 0,
      duration: 1.5,
    },
    "3"
  )
  .from(
    ".bg-img",
    {
      y: "200%",
      duration: 2.5,
    },
    "0"
  )
  .from(
    ".home-floor",
    {
      y: "100%",
      duration: 2.5,
    },
    "1"
  );
