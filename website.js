/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// slideshow for school

let slideIndex=1;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n){
  showSlides(slideIndex+=n);
}

// image control
function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  let i;
  let slides=document.getElementsByClassName("images");
  if (n>slides.length) {
    slideIndex=1;
  }
  if (n<1) {
    slideIndex=slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none"
  }
  slides[slideIndex-1].style.display="block";
  
}

// slideshow sketch
let sketchIndex=1;
showsketch( sketchIndex);

// next/prev controls
function plussketch(n){
  showsketch( sketchIndex+=n);
}

// image control
function currentsketch(n){
  showsketch( sketchIndex=n);
}

function showsketch(n){
  let i;
  let  sketchs=document.getElementsByClassName("images-sketch");
  if (n> sketchs.length) {
     sketchIndex=1;
  }
  if (n<1) {
     sketchIndex= sketchs.length;
  }
  for (i = 0; i <  sketchs.length; i++) {
     sketchs[i].style.display="none"
  }
   sketchs[sketchIndex-1].style.display="block";
  
}

// tinkering 
let tinkerIndex=1;
showtinker( tinkerIndex);

// next/prev controls
function plustinker(n){
  showtinker( tinkerIndex+=n);
}

// image control
function currenttinker(n){
  showtinker( tinkerIndex=n);
}

function showtinker(n){
  let i;
  let  tinkers=document.getElementsByClassName("images-tinker");
  if (n> tinkers.length) {
     tinkerIndex=1;
  }
  if (n<1) {
     tinkerIndex= tinkers.length;
  }
  for (i = 0; i <  tinkers.length; i++) {
     tinkers[i].style.display="none"
  }
   tinkers[tinkerIndex-1].style.display="block";
  
}