const green = document.getElementById("change");
change.addEventListener("click", () => {
  green.classList.toggle("red");
});
console.log();

gsap.from("#img1", {
  delay: 0.4,
  opacity: 0,
  duration: 2,
  y: 60,
});

gsap.from("#img2", {
  delay: 0.4,
  opacity: 0,
  duration: 2,
  x: 100,
});
gsap.from("#img3", {
  delay: 0.4,
  opacity: 0,
  duration: 2,
  y: 60,
});

gsap.from("#anim", {
  delay: 0.4,
  opacity: 0,
  duration: 2,
  y: -60,
});

gsap.from("#page h2,#page2 h2,#page3 a", {
  opacity: 0,
  duration: 1,
  y: 50,

  stagger: 0.4,

  scrollTrigger: {
    trigger: "#page h2",
    scroller: "body",

    start: "top 50%",
  },
});

gsap.from("#page4 ", {
  opacity: 0,
  duration: 2,

  stagger: 0.4,

  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "body",

    start: "#page 40%",
  },
});


alert("hello world ")