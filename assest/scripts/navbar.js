const burgerMenu = document.querySelector(".mn");
const navbarMenu = document.querySelector(".ul-nav");
const loader = document.querySelector(".loader");
const header = document.querySelector("header");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => (loader.style.display = "none"), 500);

  // Show and Hide Navbar Menu
  burgerMenu.addEventListener("click", () => {
    if (navbarMenu.style.maxHeight) {
      navbarMenu.style.maxHeight = null;
    } else {
      navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    }
    console.log(navbarMenu.scrollHeight);
  });

  const navContent = document.querySelector(".nav_content"),
    line = document.querySelector(".line"),
    cabBtn = document.querySelector(".cabinet-btn"),
    langBtn = document.querySelector(".lang-btn"),
    tel = document.querySelector(".tel");

  // show hide nav tabs
  line.addEventListener("click", () => {
    cabBtn.classList.toggle("db_none");
    navbarMenu.classList.toggle("db_none");
    navContent.classList.toggle("db_none");
    langBtn.classList.toggle("opc");
    tel.classList.toggle("opc");
  });
});

window.addEventListener("scroll", () => {
  const userImage = document.querySelector(".user-img");

  const st = Math.round(window.scrollY);

  if (st > 15) {
    userImage.style.transform = "translateX(-35px)";
  } else {
    userImage.style.transform = "translateX(0px)";
  }

  if(st>450){
    header.style.position = 'fixed';
    header.style.boxShadow = "0px 1px 15px rgba(0,0,0,0.2)"
  }
  else{
    header.style.position = '';
  }

});



// t top btn
let scrollToTopBtn = document.querySelector(".top-btn")

let rootElement = document.documentElement;

function scrollToTop() {
// Scroll to top logic
rootElement.scrollTo({
top: 0,
behavior: "smooth"
})
}

scrollToTopBtn.addEventListener('click', scrollToTop);

// swiper auto slide

// const slide = document.querySelectorAll('.swiper-slide');
// const swip= document.querySelector('.swiper-wrapper');



// console.log(swip);

// let idx=0;

// function slides(){

//   idx++;
//   if(idx >slides.length-1){
//     idx = 0;
//   }
//   if(idx < slides.length-1){
//     idx = slides.length-1;
//   }

//   swip.style.transform=`translateX(${-idx*100}%)`

// console.log('ok');
// }

// setInterval(function() {
//   slides()
// }, 1000);


const menuLink= document.querySelectorAll('.menu__link');

function hider(){
  menuLink.forEach(item => item.classList.remove('act'))
}

hider();

function shower(i=0){
  menuLink[i].classList.add('act');
}
shower()

header.addEventListener('click', (event) => {

  if (event.target && event.target.classList.contains("menu__link"))
  {
    menuLink.forEach((item, i) => {
      if (event.target == item)
      {
       hider()
        shower(i);
      }
    });

  }

})
