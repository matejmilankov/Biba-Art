// Lenis Smooth Scroll 
let lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});
//------------------------------------------------------------

// Get On top After Refresh
window.onload = function () {
  history.scrollRestoration = "manual";
  window.scrollTo(0,0);
}

function disableScroll() {
  lenis.stop();
}
function enableScroll() {
  lenis.start();
}
disableScroll();

// Hero Section Animation-----------
let tl = gsap.timeline();

tl.from(".pre-loader-img-wrap", {
  delay: 1,
  duration: 0.4,
  stagger: {amount: 0.8, from: "random"},
  opacity: "0",
  ease: "power1.out",
  scale: 0.8
}).to(".pre-loader-wrap", {
  opacity: 0,
  duration: 1,
  ease: "expo.inOut",
  display: "none"
}).to(".hero-svg-first", {
  opacity: 1,
  y: "0",
  duration: 2,
  ease: "power4.out",
  scale: 1,
  stagger: {amount: 0.2}
}, ">-0.5").from(".content-wrap, .label-text-wrap", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.in"
},"<0.2").from(".img-hero", {
  duration: 0.5,
  stagger: {each: 0.4},
  opacity: "0",
  ease: "power3.out",
  scale: 0.8,
  onComplete: enableScroll
}, ">");
//------------------------------------------------------------

// Project Change Heading Animation
  gsap.registerPlugin(ScrollTrigger);

  $('.heading-svg').eq(0).addClass('is--active');

  $(".product-grid").each(function (index) {
      let triggerElement = $(this);
      let myIndex = $(this).index();
      let targetElement = $(".heading-svg").eq(myIndex);
      let scrollTl = gsap.timeline({
          scrollTrigger: {
              trigger: triggerElement,
              start: "top bottom",
              end: "bottom bottom",
              onEnter: () => {
                  $(".heading-svg").removeClass("is--active");
                  targetElement.addClass("is--active");
              },
              onEnterBack: () => {
                  $(".heading-svg").removeClass("is--active");
                  targetElement.addClass("is--active");
              }
          }
      });
  });
//------------------------------------------------------------

// Zoom in Image Animation
$(".zoom-wrap").each(function (index) {
let triggerElement = $(this);
let targetElementOne = $(".zoom-grid");
let targetElementTwo = $(".zoom-img-2");
let targetElementThree = $(".zoom-opacity");

let scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
  }
});
scrollTl.to(targetElementOne, {
  scale: 3,
}).to(".about-svg", {
  opacity: 1,
  duration: 0.2
}, "<").to(".zoom-overlay", {
  opacity: 0.4,
      duration: 0.3
}, "<").from(targetElementTwo, {
  scale: 1.4
}, "<").to(targetElementThree, {
  opacity: 0,
  duration: 0.2
}, "<")
});
//------------------------------------------------------------

// Testimonials Animation
$(".comments-heading").eq(0).addClass("comments-heading-active");
$(".active-line").eq(0).addClass("active-line-current");
$(".testimonial-img-flexbox").eq(0).addClass("testimonial-img-flexbox-active");

$(".comments-heading-wrap").each(function (index) {
let triggerElement = $(this);
let myIndex = $(this).index();
let targetElementOne = $(".comments-heading").eq(myIndex);
let targetElementTwo = $(".active-line").eq(myIndex);
let targetElementThree = $(".testimonial-img-flexbox").eq(myIndex);

let scrollTl = gsap.timeline({
  scrollTrigger: {
     trigger: triggerElement,
     start: "top center",
     end: "bottom center",
     onEnter: () => {
        $(".comments-heading").removeClass("comments-heading-active");
        targetElementOne.addClass("comments-heading-active");
        $(".active-line").removeClass("active-line-current");
        targetElementTwo.addClass("active-line-current");
        $(".testimonial-img-flexbox").removeClass("testimonial-img-flexbox-active");
        targetElementThree.addClass("testimonial-img-flexbox-active");
      },
     onEnterBack: () => {
        $(".comments-heading").removeClass("comments-heading-active");
        targetElementOne.addClass("comments-heading-active");
        $(".active-line").removeClass("active-line-current");
        targetElementTwo.addClass("active-line-current");
        $(".testimonial-img-flexbox").removeClass("testimonial-img-flexbox-active");
        targetElementThree.addClass("testimonial-img-flexbox-active");
     } 
  }
});
});
