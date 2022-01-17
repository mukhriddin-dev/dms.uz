const district = [
  { id: 1, name: "Бухара", tel: "+998956042244" },
  { id: 2, name: "Ургенч", tel: "+998956020044" },
  { id: 3, name: "Нукус", tel: "+998956050044" },
  { id: 4, name: "Навои", tel: "+998956100044" },
  { id: 5, name: "Самарканд", tel: "+998955090044" },
  { id: 6, name: "Карши", tel: "+998956814400" },
  { id: 7, name: "Термез", tel: "+998956510044" },
  { id: 8, name: "Андижан", tel: "+99895 2010044" },
  { id: 9, name: "Фергана", tel: "+998954020044" },
  { id: 10, name: "Наманган", tel: "+998953034440" },
  { id: 11, name: "Джизак", tel: "+998955102266" },
  { id: 12, name: "Гулистан", tel: "+998712530044" },
  { id: 13, name: "Ташкент", tel: "+998712531144" },
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

// bukhoro
bukhoro.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
  <h2 class="branch-section-title ">Наши филиалы</h2>
  <h4>Город ${district[0].name}</h4>
  <h4>${district[0].tel}</h4>
  <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
bukhoro.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
    <h2 class="branch-section-title ">Наши филиалы</h2>
    <h4>Город ${district[0].name}</h4>
    <h4>${district[0].tel}</h4>
    <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// khorezem

khorezem.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
      <h2 class="branch-section-title ">Наши филиалы</h2>
      <h4>Город ${district[1].name}</h4>
      <h4>${district[1].tel}</h4>
      <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
khorezem.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
        <h2 class="branch-section-title ">Наши филиалы</h2>
        <h4>Город ${district[1].name}</h4>
        <h4>${district[1].tel}</h4>
        <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// karakalpakstan

karakalpakstan.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
          <h2 class="branch-section-title ">Наши филиалы</h2>
          <h4>Город ${district[2].name}</h4>
          <h4>${district[2].tel}</h4>
          <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
karakalpakstan.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
            <h2 class="branch-section-title ">Наши филиалы</h2>
            <h4>Город ${district[2].name}</h4>
            <h4>${district[2].tel}</h4>
            <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// navoi

navoi.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
              <h2 class="branch-section-title ">Наши филиалы</h2>
              <h4>Город ${district[3].name}</h4>
              <h4>${district[3].tel}</h4>
              <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
navoi.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                <h2 class="branch-section-title ">Наши филиалы</h2>
                <h4>Город ${district[3].name}</h4>
                <h4>${district[3].tel}</h4>
                <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// samarkand

samarkand.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                  <h2 class="branch-section-title ">Наши филиалы</h2>
                  <h4>Город ${district[4].name}</h4>
                  <h4>${district[4].tel}</h4>
                  <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
samarkand.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                    <h2 class="branch-section-title ">Наши филиалы</h2>
                    <h4>Город ${district[4].name}</h4>
                    <h4>${district[4].tel}</h4>
                    <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

//

// kashkadarya

kashkadarya.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
              <h2 class="branch-section-title ">Наши филиалы</h2>
              <h4>Город ${district[5].name}</h4>
              <h4>${district[5].tel}</h4>
              <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
kashkadarya.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                <h2 class="branch-section-title ">Наши филиалы</h2>
                <h4>Город ${district[5].name}</h4>
                <h4>${district[5].tel}</h4>
                <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// surkhandarya

surkhandarya.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                  <h2 class="branch-section-title ">Наши филиалы</h2>
                  <h4>Город ${district[6].name}</h4>
                  <h4>${district[6].tel}</h4>
                  <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
surkhandarya.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                    <h2 class="branch-section-title ">Наши филиалы</h2>
                    <h4>Город ${district[6].name}</h4>
                    <h4>${district[6].tel}</h4>
                    <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// kashkadarya

andijon.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                      <h2 class="branch-section-title ">Наши филиалы</h2>
                      <h4>Город ${district[7].name}</h4>
                      <h4>${district[7].tel}</h4>
                      <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
andijon.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                        <h2 class="branch-section-title ">Наши филиалы</h2>
                        <h4>Город ${district[7].name}</h4>
                        <h4>${district[7].tel}</h4>
                        <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// farghona

farghona.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[8].name}</h4>
                          <h4>${district[8].tel}</h4>
                          <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
farghona.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[8].name}</h4>
                            <h4>${district[8].tel}</h4>
                            <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// namangan

namangan.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[9].name}</h4>
                          <h4>${district[9].tel}</h4>
                          <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});
namangan.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[9].name}</h4>
                            <h4>${district[9].tel}</h4>
                            <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// jizzakh

jizzakh.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                          <h2 class="branch-section-title ">Наши филиалы</h2>
                          <h4>Город ${district[10].name}</h4>
                          <h4>${district[10].tel}</h4>
                          <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

jizzakh.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                            <h2 class="branch-section-title ">Наши филиалы</h2>
                            <h4>Город ${district[10].name}</h4>
                            <h4>${district[10].tel}</h4>
                            <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

//  sirdaryo

sirdaryo.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                                  <h2 class="branch-section-title ">Наши филиалы</h2>
                                  <h4>Город ${district[11].name}</h4>
                                  <h4>${district[11].tel}</h4>
                                  <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

sirdaryo.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                                    <h2 class="branch-section-title ">Наши филиалы</h2>
                                    <h4>Город ${district[11].name}</h4>
                                    <h4>${district[11].tel}</h4>
                                    <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// toshkent

toshkent.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                              <h2 class="branch-section-title ">Наши филиалы</h2>
                              <h4>Город ${district[12].name}</h4>
                              <h4>${district[12].tel}</h4>
                              <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

toshkent.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                                <h2 class="branch-section-title ">Наши филиалы</h2>
                                <h4>Город ${district[12].name}</h4>
                                <h4>${district[12].tel}</h4>
                                <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

toshkentCity.addEventListener("mousedown", () => {
  boxDistrict.innerHTML = `
                                  <h2 class="branch-section-title ">Наши филиалы</h2>
                                  <h4>Город ${district[13].name}</h4>
                                  <h4>${district[13].tel}</h4>
                                  <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

toshkentCity.addEventListener("mouseover", () => {
  boxDistrict.innerHTML = `
                                    <h2 class="branch-section-title ">Наши филиалы</h2>
                                    <h4>Город ${district[13].name}</h4>
                                    <h4>${district[13].tel}</h4>
                                    <a href="#" class="d-inline-block link-btn-map"><t>Посмотреть на карте</t></a>`;
});

// onasini emsin tugadi
