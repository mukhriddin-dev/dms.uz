const burgerMenu = document.querySelector(".mn");
const navbarMenu = document.querySelector(".ul-nav");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");

  if (navbarMenu.style.maxHeight) {
    navbarMenu.style.maxHeight = null;
  } else {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  }
  console.log(navbarMenu.scrollHeight);
});
