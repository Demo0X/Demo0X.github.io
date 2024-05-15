// Landing page animation with tweenmax

document.body.addEventListener("keypress", (ev) => {
  if (ev.key == "Enter") {
    TweenMax.to(".landing", 3, { opacity: 0 });
    TweenMax.from(".main", 5, { opacity: 0, delay: 2 });
    TweenMax.from(".header", 1.5, { opacity: 0, height: 0, delay: 3 });
    TweenMax.from(".quote", 2.5, { opacity: 0, y: 100, delay: 3.5 });
    TweenMax.from(".sidebar", 1, { opacity: 0, x: 100, delay: 4 });
    document.querySelector(".landing").style.zIndex = "-10";
  }
});
// Explore buttons on guardian section
function Warlock() {
  window.location.href = "guardianW.html";
}
function Hunter() {
  window.location.href = "guardianH.html";
}
function Titan() {
  window.location.href = "guardianT.html";
}

// Scrolltrigger animations

// Trailer box entrance
gsap.from(".trailerbox", {
  scrollTrigger: {
    trigger: ".trailerbox",
    start: "top center",
    markers: false,
    scrub: false,
  },
  y: -100,
  opacity: 0,
  duration: 1,
});

// About section entrance
gsap.from(".heading", {
  scrollTrigger: {
    trigger: ".heading",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: -100,
  opacity: 0,
  duration: 3,
});
gsap.from(".para", {
  scrollTrigger: {
    trigger: ".para",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: -100,
  opacity: 0,
  duration: 3,
});
gsap.from(".heading1", {
  scrollTrigger: {
    trigger: ".heading",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: 100,
  opacity: 0,
  duration: 3,
});
gsap.from(".para1", {
  scrollTrigger: {
    trigger: ".heading",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: 100,
  opacity: 0,
  duration: 4,
});
gsap.from(".para2", {
  scrollTrigger: {
    trigger: ".para2",
    start: "top center",
    end: "bottom 30%",
    markers: false,
    scrub: true,
  },
  x: -100,
  opacity: 0,
  duration: 3,
});
gsap.from(".heading2", {
  scrollTrigger: {
    trigger: ".heading2",
    start: "top center",
    end: "bottom 30%",
    markers: false,
    scrub: true,
  },
  x: -100,
  opacity: 0,
  duration: 3,
});
gsap.from(".img", {
  scrollTrigger: {
    trigger: ".img",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: 100,
  opacity: 0,
  duration: 3,
});
gsap.from(".img2", {
  scrollTrigger: {
    trigger: ".img",
    start: "top center",
    markers: false,
    scrub: true,
  },
  x: -100,
  opacity: 0,
  duration: 3,
});
gsap.from(".img3", {
  scrollTrigger: {
    trigger: ".img3",
    start: "top center",
    end: "bottom 30%",
    markers: false,
    scrub: true,
  },
  x: 100,
  opacity: 0,
  duration: 3,
});

// Guardians section entrance
gsap.from(".slidercontainer", {
  scrollTrigger: {
    trigger: ".slidercontainer",
    start: "top center",
    markers: false,
    scrub: false,
  },
  width: 0,
  opacity: 0,
  duration: 1,
});
gsap.from(".slidertitle", {
  scrollTrigger: {
    trigger: ".slidercontainer",
    start: "top center",
    markers: false,
    scrub: false,
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

// Subclasses area entrances
gsap.from(".subclasses", {
  scrollTrigger: {
    trigger: ".img4",
    start: "top center",
    markers: false,
    scrub: false,
  },
  x: 100,
  opacity: 0,
  duration: 2,
});
gsap.from(".subclassbtn", {
  scrollTrigger: {
    trigger: ".img4",
    start: "top center",
    markers: false,
    scrub: false,
  },
  x: 100,
  opacity: 0,
  duration: 2,
});
gsap.from(".img4", {
  scrollTrigger: {
    trigger: ".img4",
    start: "center center",
    end: "center center",
    markers: false,
    scrub: false,
  },
  x: -100,
  opacity: 0,
  duration: 2,
});
gsap.from(".img5", {
  scrollTrigger: {
    trigger: ".img4",
    start: "top center",
    markers: false,
    scrub: false,
  },
  y: 100,
  opacity: 0,
  duration: 2,
});

// constants for lenis scroll

const home = document.querySelector(".home");
const about = document.querySelector(".about");
const guardian = document.querySelector(".guardian");
const subclass = document.querySelector(".subclass");

// Lenis Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Lenis scrolling to DOM elements
home.addEventListener("click", () => {
  lenis.scrollTo(".imagebox", {
    duration: 2,
  });
});
about.addEventListener("click", () => {
  lenis.scrollTo(".desc", {
    duration: 2,
  });
});
guardian.addEventListener("click", () => {
  lenis.scrollTo(".slidercontainer", {
    duration: 3,
  });
});
subclass.addEventListener("click", () => {
  lenis.scrollTo(".subclasses", {
    duration: 2,
  });
});
