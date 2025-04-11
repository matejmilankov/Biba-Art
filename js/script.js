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
}, ">-0.5").from(".content-wrap, .label-text-wrap, .cardSlider", {
  opacity: 0,
  duration: 0.5,
  ease: "power2.in",
  onComplete: enableScroll
},"<0.2");
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

}, "<").to(".zoom-overlay", {
  opacity: 0.4,

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

// Swiper slider
let swiper = new Swiper(".cardSlider", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  slidesPerGroup: 1
});


let images = document.querySelectorAll(".product-img");
let productsWrap = document.querySelector(".products-wrap");
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    let currentImage = event.target;
    let currentAttr = currentImage.getAttribute("data-text");

    let parentElemet = image.parentElement;
    let container = document.createElement("div");
    let img = document.createElement("img");
    let closeWrap = document.createElement("div");
    let closeStickOne = document.createElement("div");
    let closeStickTwo = document.createElement("div");

    container.classList.add("lightbox-container");
    parentElemet.appendChild(container);

    closeWrap.classList.add("lightbox-close");
    container.appendChild(closeWrap);

    closeStickOne.classList.add("close-sticky-one");
    closeWrap.appendChild(closeStickOne);

    closeStickTwo.classList.add("close-sticky-two");
    closeWrap.appendChild(closeStickTwo);

    img.setAttribute("src", `67b73609e5e1486d8dbab367/${currentAttr}.webp`);
    container.appendChild(img);

    gsap.to(container, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.out"
    });

    disableScroll();

    closeWrap.addEventListener("click", () => {
      gsap.to(container, {
        opacity: 0,
        ease: "power1.out",
        onComplete: () => {
          container.remove();
        }
      });
      enableScroll();
    })

  });
});
