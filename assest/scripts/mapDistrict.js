const district = [
  { id: 1, name: "Бухара", tel: "+998956042244" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 2, name: "Ургенч", tel: "+998956020044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 3, name: "Нукус", tel: "+998956050044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 4, name: "Навои", tel: "+998956100044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 5, name: "Самарканд", tel: "+998955090044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 6, name: "Карши", tel: "+998956814400" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 7, name: "Термез", tel: "+998956510044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 8, name: "Андижан", tel: "+99895 2010044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 9, name: "Фергана", tel: "+998954020044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 10, name: "Наманган", tel: "+998953034440" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 11, name: "Джизак", tel: "+998955102266" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 12, name: "Гулистан", tel: "+998712530044" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
  { id: 13, name: "Ташкент", tel: "+998712531144" , loc : 'https://goo.gl/maps/brw6Q6dg6JyuMdSp8' },
];

const bukhoro = document.querySelector("#UZB354"),
  khorezem = document.querySelector("#UZB355"),
  karakalpakstan = document.querySelector("#UZB356"),
  navoi = document.querySelector("#UZB357"),
  samarkand = document.querySelector("#UZB358"),
  kashkadarya = document.querySelector("#UZB361"),
  surkhandarya = document.querySelector("#UZB362"),
  andijon = document.querySelector("#UZB363"),
  farghona = document.querySelector("#UZB364"),
  namangan = document.querySelector("#UZB365"),
  jizzakh = document.querySelector("#UZB370"),
  sirdaryo = document.querySelector("#UZB371"),
  toshkent = document.querySelector("#UZB372"),
  toshkentCity = document.querySelector("#UZ828");

let boxDistrict = document.querySelector(".boxDistrict");
let sendBtn = document.querySelector('.boxDistrict a')

const path=document.querySelectorAll('.map-div a');
const map = document.querySelector('.map-div');
// console.log(sendBtn.getAttribute('href'));

// setter=()=>{
//   sendBtn.getAttribute('href');
//   sendBtn.setAttribute('href',district[0].loc);
//   console.log(sendBtn)
// }
// 

// console.log(sendBtn)




// function hider(){
//   path.forEach(item => item.classList.remove('act'))
// }

// hider();

// function shower(i=0){
//   path[i].classList.add('act');
// }
// shower()

// map.addEventListener('click', (event) => {

//   if (event.target && event.target.classList.contains("menu__link"))
//   {
//     menuLink.forEach((item, i) => {
//       if (event.target == item)
//       {
//        hider()
//         shower(i);
//       }
//     });

//   }

// })




// bukhoro
bukhoro.addEventListener("click", () => {

  boxDistrict.innerHTML = `
  <h2 class="branch-section-title ">Наши филиалы</h2>
  <h4>Город ${district[0].name}</h4>
  <h4>${district[0].tel}</h4>
  <a href=${district[0].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

bukhoro.addEventListener("click", () => {
  boxDistrict.innerHTML = `
    <h2 class="branch-section-title ">Наши филиалы</h2>
    <h4>Город ${district[0].name}</h4>
    <h4>${district[0].tel}</h4>
    <a href=${district[0].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// khorezem

khorezem.addEventListener("click", () => {
  sendBtn.setAttribute('href',district[1].loc)
  boxDistrict.innerHTML = `
      <h2 class="branch-section-title ">Наши филиалы</h2>
      <h4>Город ${district[1].name}</h4>
      <h4>${district[1].tel}</h4>
      <a href=${district[0].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
khorezem.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
        <h2 class="branch-section-title ">Наши филиалы</h2>
        <h4>Город ${district[1].name}</h4>
        <h4>${district[1].tel}</h4>
        <a href=${district[1].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// karakalpakstan

karakalpakstan.addEventListener("clikc", () => {
  sendBtn.setAttribute('href',district[0].loc)
  boxDistrict.innerHTML = `
          <h2 class="branch-section-title ">Наши филиалы</h2>
          <h4>Город ${district[2].name}</h4>
          <h4>${district[2].tel}</h4>
          <a href=${district[2].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
karakalpakstan.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
            <h2 class="branch-section-title ">Наши филиалы</h2>
            <h4>Город ${district[2].name}</h4>
            <h4>${district[2].tel}</h4>
            <a href=${district[2].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// navoi

navoi.addEventListener("click", () => {
  boxDistrict.innerHTML = `
              <h2 class="branch-section-title ">Наши филиалы</h2>
              <h4>Город ${district[3].name}</h4>
              <h4>${district[3].tel}</h4>
              <a href=${district[3].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
navoi.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                <h2 class="branch-section-title ">Наши филиалы</h2>
                <h4>Город ${district[3].name}</h4>
                <h4>${district[3].tel}</h4>
                <a href=${district[3].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// samarkand

samarkand.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                  <h2 class="branch-section-title ">Наши филиалы</h2>
                  <h4>Город ${district[4].name}</h4>
                  <h4>${district[4].tel}</h4>
                  <a href=${district[4].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
samarkand.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                    <h2 class="branch-section-title ">Наши филиалы</h2>
                    <h4>Город ${district[4].name}</h4>
                    <h4>${district[4].tel}</h4>
                    <a href=${district[4].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

//

// kashkadarya

kashkadarya.addEventListener("click", () => {
  boxDistrict.innerHTML = `
              <h2 class="branch-section-title ">Наши филиалы</h2>
              <h4>Город ${district[5].name}</h4>
              <h4>${district[5].tel}</h4>
              <a href=${district[0].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
kashkadarya.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                <h2 class="branch-section-title ">Наши филиалы</h2>
                <h4>Город ${district[5].name}</h4>
                <h4>${district[5].tel}</h4>
                <a href=${district[5].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// surkhandarya

surkhandarya.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                  <h2 class="branch-section-title ">Наши филиалы</h2>
                  <h4>Город ${district[6].name}</h4>
                  <h4>${district[6].tel}</h4>
                  <a href=${district[6].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
surkhandarya.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                    <h2 class="branch-section-title ">Наши филиалы</h2>
                    <h4>Город ${district[6].name}</h4>
                    <h4>${district[6].tel}</h4>
                    <a href=${district[6].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// kashkadarya

andijon.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                      <h2 class="branch-section-title ">Наши филиалы</h2>
                      <h4>Город ${district[7].name}</h4>
                      <h4>${district[7].tel}</h4>
                      <a href=${district[7].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
andijon.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                        <h2 class="branch-section-title ">Наши филиалы</h2>
                        <h4>Город ${district[7].name}</h4>
                        <h4>${district[7].tel}</h4>
                        <a href=${district[7].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// farghona

farghona.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[8].name}</h4>
                          <h4>${district[8].tel}</h4>
                          <a href=${district[8].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
farghona.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[8].name}</h4>
                            <h4>${district[8].tel}</h4>
                            <a href=${district[8].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// namangan

namangan.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[9].name}</h4>
                          <h4>${district[9].tel}</h4>
                          <a href=${district[9].loc}target="_blank"  target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
namangan.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[9].name}</h4>
                            <h4>${district[9].tel}</h4>
                            <a href=${district[9].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// jizzakh

jizzakh.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[10].name}</h4>
                          <h4>${district[10].tel}</h4>
                          <a href=${district[10].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

jizzakh.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[10].name}</h4>
                            <h4>${district[10].tel}</h4>
                            <a href=${district[10].loc} target="_blank" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

//  sirdaryo

sirdaryo.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                                  <h2 class="branch-section-title ">Наши филиалы</h2>
                                  <h4>Город ${district[11].name}</h4>
                                  <h4>${district[11].tel}</h4>
                                  <a href=${district[11].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

sirdaryo.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                                    <h2 class="branch-section-title ">Наши филиалы</h2>
                                    <h4>Город ${district[11].name}</h4>
                                    <h4>${district[11].tel}</h4>
                                    <a href=${district[11].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// toshkent

toshkent.addEventListener("click", () => {
  boxDistrict.innerHTML = `
                              <h2 class="branch-section-title ">Наши филиалы</h2>
                              <h4>Город ${district[12].name}</h4>
                              <h4>${district[12].tel}</h4>
                              <a href=${district[12].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

toshkent.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                                <h2 class="branch-section-title ">Наши филиалы</h2>
                                <h4>Город ${district[12].name}</h4>
                                <h4>${district[12].tel}</h4>
                                <a href=${district[12].loc} target="_blank"  class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// toshkentCity.addEventListener("click", () => {
//   boxDistrict.innerHTML = `
//                                   <h2 class="branch-section-title ">Наши филиалы</h2>
//                                   <h4>Город ${district[13].name}</h4>
//                                   <h4>${district[13].tel}</h4>
//                                   <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
// });

// toshkentCity.addEventListener("mouseover", () => {
//   boxDistrict.innerHTML = `
//                                     <h2 class="branch-section-title ">Наши филиалы</h2>
//                                     <h4>Город ${district[13].name}</h4>
//                                     <h4>${district[13].tel}</h4>
//                                     <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
// });

// onasini emsin tugadi
