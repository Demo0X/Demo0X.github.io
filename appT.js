// Landing page animation
const tl = gsap.timeline({ default: { ease: "power3.inOut" } });

tl.to(".text1", {
  y: "0%",
  duration: 1,
  stagger: 0.4,
});

tl.to(".loader", {
  delay: 1.5,
  scale: 20,
  duration: 1,
  ease: "power2.inOut",
});

tl.to(
  ".loader",
  {
    y: 200,
    x: -12000,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
  },
  "<"
);

tl.from(
  ".main",
  {
    opacity: 0,
    duration: 2,
  },
  ">"
);

tl.from(
  ".header",
  {
    opacity: 0,
    y: -100,
    width: 0,
    duration: 3,
  },
  "<"
);
tl.from(
  ".nav",
  {
    opacity: 0,
    y: -100,
    duration: 1,
  },
  ">"
);
tl.from(
  ".intro h1",
  {
    width: 0,
    opacity: 0,
    duration: 1,
  },
  "<"
);
tl.from(
  ".intro img",
  {
    height: 0,
    opacity: 0,
    duration: 1,
  },
  "<"
);
tl.from(
  ".intro p",
  {
    x: -100,
    opacity: 0,
    duration: 1,
  },
  ">"
);
tl.from(
  ".overview h1",
  {
    width: 0,
    opacity: 0,
    duration: 1,
  },
  "<"
);
tl.from(
  ".overview p",
  {
    x: -100,
    opacity: 0,
    duration: 1,
  },
  ">"
);
tl.from(
  ".abilities h1",
  {
    width: 0,
    opacity: 0,
    duration: 1,
  },
  "<"
);
tl.from(
  ".abilitiestxt",
  {
    x: -100,
    opacity: 0,
    duration: 1,
  },
  ">"
);

// Scroll Trigger animations
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".subclasses",
    start: "top center",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".solar",
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".arc",
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: false,
    ease: "power2.inOut",
  },
});
tl2.from(".subclasses h2", {
  opacity: 0,
  width: 0,
  duration: 2,
});
tl2.from(
  ".void",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl2.from(
  ".voidtxt",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl2.from(
  ".s1",
  {
    opacity: 0,
    width: 0,
    duration: 2,
  },
  "<"
);
tl2.from(
  ".voidsuper",
  {
    opacity: 0,
    x: 300,
    duration: 1,
  },
  "<"
);
tl3.from(
  ".solar",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl3.from(
  ".solartxt",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl3.from(
  ".s2",
  {
    opacity: 0,
    width: 0,
    duration: 2,
  },
  "<"
);
tl3.from(
  ".solarsuper",
  {
    opacity: 0,
    x: 300,
    duration: 1,
  },
  "<"
);
tl4.from(
  ".arc",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl4.from(
  ".arctxt",
  {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  "<"
);
tl4.from(
  ".s3",
  {
    opacity: 0,
    width: 0,
    duration: 2,
  },
  "<"
);
tl4.from(
  ".arcsuper",
  {
    opacity: 0,
    x: 300,
    duration: 1,
  },
  "<"
);

// Lenis Smooth Scrolling
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
