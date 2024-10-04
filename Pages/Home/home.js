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
    "0"
  )
  .from(
    ".cliff-right",
    {
      x: 1000,
      duration: 2.5,
    },
    "0"
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
  );
