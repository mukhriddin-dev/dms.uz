"use strict";

const reg1 = document.querySelector('#reg1'),
  reg2 = document.querySelector('#reg2'),
  pruductType = document.querySelector('#typeProduct'),
  priceList = document.querySelectorAll('#price_list li p'),
  typeProduct = document.querySelector('#typeProduct'),
  priceRange = document.querySelector('#priceRange'),
  btnS = document.querySelectorAll('.btnS');

console.log(priceList);

reg1.addEventListener('change', (e) => {
  priceList[0].innerHTML = `Откуда: ${e.target.value}`
})

reg2.addEventListener('change', (e) => {
  priceList[1].innerHTML = `Куда: ${e.target.value}`
})

typeProduct.addEventListener('change', (e) => {
  priceList[2].innerHTML = ` Что отправляем: ${e.target.value}`
})

priceRange.addEventListener('input', (e) => {
  priceList[3].innerHTML = ` Общий вес: ${e.target.value * 10}кг`
})

// selectors 

let check1 = btnS[0].classList.contains('active');
let check2 = btnS[1].classList.contains('active');
let check3 = btnS[2].classList.contains('active');
let check4 = btnS[3].classList.contains('active');

btnS[0].addEventListener('click', () => {
  if (check1) {
    btnS[1].classList.remove('active');

  } else {
    btnS[0].classList.add('active');
    btnS[1].classList.remove('active');
    priceList[4].innerHTML='Доставка: Да';
  }
 
})


btnS[1].addEventListener('click', () => {
  if (check2) {
    btnS[0].classList.remove('active');
  } else {
    btnS[1].classList.add('active');
    btnS[0].classList.remove('active');
    priceList[4].innerHTML='Доставка: Нет';
  }
  
})


btnS[2].addEventListener('click', () => {
  if (check1) {
    btnS[3].classList.remove('active');
  } else {
    btnS[2].classList.add('active');
    btnS[3].classList.remove('active');
    priceList[5].innerHTML='Вызов курьера: Да';
  }
  
})


btnS[3].addEventListener('click', () => {
  if (check2) {
    btnS[2].classList.remove('active');
  } else {
    btnS[3].classList.add('active');
    btnS[2].classList.remove('active');
    priceList[5].innerHTML='Вызов курьера: Нет';
  }
  
})



