'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



// ******************************************************************************

function clearValue(){
  document.getElementById('reset-form-data').reset();
}

let notSubmit = document.getElementById('not-submit');

notSubmit.addEventListener('click', function(e){
  e.preventDefault();
  clearValue();
});

// ******************************************************************

var parentabc = document.querySelector("#scrollHome");
// var parentabc1 = document.querySelector(".about");
var cursor = document.querySelector(".cursor");

parentabc.addEventListener('mousemove', function(dets){
  cursor.style.left = dets.x+"px"
  cursor.style.top = dets.y+"px"
})

parentabc.addEventListener('mouseenter', function(dets){
  cursor.style.scale = "1"
  cursor.style.opacity = "1"
})

parentabc.addEventListener('mouseleave', function(dets){
  cursor.style.scale = "0"
  cursor.style.opacity = "0"
})

// *******************************************

// parentabc1.addEventListener('mouseenter', function(dets){
//   cursor.style.scale = "0"
//   cursor.style.opacity = "0"
// })

