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
