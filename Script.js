// Timeline 1: Entrance animations
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});


tl.from(".front", {
  duration: 1,
  y: 1000,
});

tl.from("#coffee", {
  duration: 1,
  y: 800,
  scale: 2,
});

tl.from(".front h1", {
  duration: 1,
  y: 1000,
});

// Grouped coffee bean animations for cleaner code
["#coffeebean1", "#coffeebean2", "#coffeebean3", "#coffeebean4", "#coffeebean5"].forEach((id) => {
  tl.from(id, {
    duration: 1,
    y: 800,
    scale: 2,
  });
});

// Timeline 2: Scroll-triggered animation
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    scrub: 2,
   // typo fixed: should be "markers", not "marker"
    start: "0% 90%",
    end: "50% 50%",
  },
});

tl2.add("hi"); // define the label

tl2.to("#coffee", {
  top: 753,
  left: 105,
  scale: 0.9,
}, "hi");

tl2.to("#coffeebean1", {
  top: 753,
  left: 253,
  scale: 0.9,
  rotate: 142,
}, "hi"); // use the same label to sync them

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#menu",
    scroller: "body",
    scrub: 2,
    // typo fixed: should be "markers", not "marker"
    start: "0% 90%",
    end: "50% 50%",
  },
});
tl3.to("#coffee", {
  top: 1480,
  left: 647,
  scale: 0.9,
  duration:1
  
}, "hi");
tl3.from("#can1",{
  x:-300,
  duration:1
},"hi");
tl3.from("#can2",{
  x:300,
  duration:1
},"hi");
// let tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#contact",
//     scroller: "body",
//     scrub: 2,
//     markers: true, // typo fixed: should be "markers", not "marker"
//     start: "0% 90%",
//     end: "50% 50%",
//   },
// });
// tl4.to("#coffee", {
//   top: 2275,
//   left: 1032,
//   duration:1
  
  
// }, "hi");
// tl4.to("#can1", {
//  top: "180vh", 
// left: "60vw",
// duration:1,
//   rotate :-20
  
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    scroller: "body",
    scrub: 2,
    
    start: "top 80%",
    end: "top 20%",
  },
});

// Animate coffee can (middle)
tl4.to("#coffee", {
  top: 2236,
  left:1034,
  rotate: 0,
  scale: 1,
  duration: 1
}, "merge");

// Animate can1 (left Fanta can)
tl4.to("#can1", {
  y: 830, // distance to move down
x: 580, // distance to move right

  rotate: -15,
  scale: 1,
  duration: 1
}, "merge");

// Animate can2 (right Coke can)
tl4.to("#can2", {
 y: 852, // distance to move down
x: 200, // distance to move right

  rotate: 15,
  scale: 1,
  duration: 1
}, "merge");

// Animate coffee bean (on top of coffee)
tl4.to("#coffeebean1", {
  top: "110%",
  left: "61%",
  rotate: -5,
  scale: 1,
  duration: 1
}, "merge");

