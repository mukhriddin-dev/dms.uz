const hamburger=document.querySelector('.hamburger'),
      navLinks=document.querySelector('.nav-links');

      hamburger.addEventListener('click', ()=>{
        navLinks.classList.toggle('navlink-swiper')
      })
