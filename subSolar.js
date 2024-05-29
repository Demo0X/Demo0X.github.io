// Gsap landing page animation

var tl = gsap.timeline({
  default: {
    ease: "power1.Out",
  },
});

tl.from(".main", {
  delay: 0.5,
  opacity: 0,
  duration: 3,
});
tl.from(
  ".header",
  {
    opacity: 0,
    y: -100,
    duration: 2,
  },
  "<"
);
tl.from(
  ".title",
  {
    opacity: 0,
    y: 120,
    duration: 3,
  },
  "<"
);
tl.from(
  ".title img",
  {
    height: 0,
    ease: "power1.inOut",
    y: 120,
    duration: 3,
    opacity: 0,
  },
  "<"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".overview",
    start: "top center",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});

tl2.from(
  ".overviewbox",
  {
    x: 200,
    duration: 2,
    opacity: 0,
    ease: "back.inOut",
  },
  "<"
);
tl2.from(
  ".overview img",
  {
    x: -700,
    opacity: 0,
    ease: "back.inOut",
    duration: 2,
  },
  "<"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guardiansbox",
    start: "top center",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});

tl3.from(
  ".guardiantitle",
  {
    opacity: 0,
    y: -100,
    duration: 2,
  },
  "<"
);

tl3.from(
  ".guardiansbox",
  {
    opacity: 0,
    height: 0,
    duration: 1,
  },
  "<"
);

tl3.from(
  ".guardians h2",
  {
    width: 0,
    duration: 1,
  },
  "<"
);

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "bottom center",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});

tl4.from(".verbtitle h2", {
  y: -100,
  duration: 3,
  opacity: 0,
});
tl4.from(
  ".verbtitle p",
  {
    x: -100,
    duration: 3,
    opacity: 0,
  },
  "<"
);

tl4.from(
  ".wrapper",
  {
    scale: 0.8,
    duration: 1,
    opacity: 0,
  },
  ">"
);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector(".title h1").onmouseover = (event) => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })

      .join("");

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);

    iterations += 1 / 10;
  }, 30);
};

function Warlock() {
  window.location.href = "guardianW.html";
}
function Hunter() {
  window.location.href = "guardianH.html";
}
function Titan() {
  window.location.href = "guardianT.html";
}
