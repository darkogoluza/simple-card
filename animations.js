const tl = gsap.timeline();

const animationMainSection = {
  x: 0,
  opacity: 1,
  duration: 0.5,
  ease: Power4.easeOut,
};

tl.fromTo(".main-section h2", { x: -50, opacity: 0 }, animationMainSection);
tl.fromTo(
  ".main-section h1",
  { x: -50, opacity: 0 },
  animationMainSection,
  "-=0.4"
);
tl.fromTo(
  ".main-section p",
  { x: -50, opacity: 0 },
  animationMainSection,
  "-=0.4"
);
tl.fromTo(
  ".card-buttons",
  { x: -50, opacity: 0 },
  animationMainSection,
  "-=0.4"
);
tl.fromTo(
  ".card-price",
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: Power4.easeOut },
  "-=0.4"
);
tl.fromTo(
  ".card-date-time",
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5, ease: Power4.easeOut },
  "-=0.4"
);
