 $(function(){
 
 var swiper = new Swiper(".main_slide", {
     slidesPerView: "auto",
     centeredSlides: true,
     spaceBetween: 30,
     autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
     speed:600,
     loop:true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
      prevEl: ".prev",
      nextEl: ".next",
    },
}); 

gsap.to(".intro .feature > ul > li", {
  duration: 1,
  opacity:1,
  y:0,
  stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
});

// $(window).scroll(function(){
//   curr = $(this).scrollTop();
// });

// gsap.to(".works .tit-wrap", {
//   duration: 1,
//   opacity:1,
//   y:0,
//   stagger: 0.4 
// });


let tl = gsap.timeline({
	scrollTrigger: {
	trigger: ".works",
	start: "top 80%",
	end:"100",
	// stagger: 0.05,
  pasued: true,
	// markers: true,
	},
 
	});
  tl.fromTo(".works .tit-wrap h2", {opacity: 0},{opacity: 1,})
  // .fromTo(".works .tit-wrap .etc_icon", {opacity: 0},{opacity: 1})
  .fromTo(".works .items_wrap > ul > li", {opacity: 0},{opacity: 1, stagger:0.01})
 

  let menu = gsap.timeline({
    scrollTrigger: {
      trigger: ".business",
      start: "top 700",
      end:"100",
      stagger: 0.1,
      pasued: true,
      // markers:true
    }
  });
  menu.fromTo(".business .tit_wrap h2", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".business .tit_wrap p", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".business .current_wrap .items", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".business .more_btn", {opacity: 0, y:"10%"},{opacity: 1, y:0})

 
var new_slide01 = new Swiper(".new_slide01", {
  speed:1000,
  parallax: true,
  loop:true,
  simulateTouch:false
});

var new_slide02 = new Swiper(".new_slide02", {
  slidesPerView: "auto",
  speed:600,
  spaceBetween: 80,
  loop:true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: "true",
    hide:false
  },
});

new_slide02.on('slideNextTransitionStart', function () {
  new_slide01.slideNext();
});

new_slide02.on('slidePrevTransitionStart', function () {
  new_slide01.slidePrev();
});

// kitchen_slide02.controller.control = kitchen_slide01;

});