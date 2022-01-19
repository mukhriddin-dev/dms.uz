const burgerMenu = document.querySelector(".mn");
const navbarMenu = document.querySelector(".ul-nav");
const loader = document.querySelector(".loader");

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

  const cardImg = document.querySelectorAll(".circle-card__imgs");
  const trucCar = document.querySelector(".truck-imgs");
  const biker = document.querySelector(".bikers");

  const st = Math.round(window.scrollY);

  if (st > 15) {
    userImage.style.transform = "translateX(-35px)";
  } else {
    userImage.style.transform = "translateX(0px)";
  }

  if (st > 645) {
    cardImg.forEach(
      (item) =>
        (item.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1.2)")
    );
  } else {
    cardImg.forEach(
      (item) =>
        (item.style.transform = "translate(-50%, -50%) rotate(-45deg) scale(1)")
    );
  }

  if (st > 1150) {
    trucCar.style.transform = "translateX(0px) scale(1)";
  }

  if (st > 2800) {
    biker.style.transform = "translateX(0px) scale(1)";
  }
});
