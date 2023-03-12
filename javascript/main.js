// ========menu /mostrar--ocultar========//
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
      
// ========mostrar menu=========//
// validar mostrar esxistente y ocultar menu //

if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
  });
}
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  });
}

// =================remover menu mobil===============//

const navLink = document.querySelectorAll('.nav__link');
function linkAction (){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


//================mostrar o ocultar skills===================//

const skillsContenido = document.getElementsByClassName('skills__contenido')
      skillsHeader = document.querySelectorAll('.skills__header');

function barraSkills(){
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContenido.length; i++){
    skillsContenido[i].className = 'skills__contenido skills__close';
  }
  if(itemClass === 'skills__contenido skills__close'){
    this.parentNode.className = 'skills__contenido skills__open';
  }
}

skillsHeader.forEach((el) => el.addEventListener('click', barraSkills))

//================== Calificacion trabajo====================//


const tabs = document.querySelectorAll('[data-target]'),
      tabsConten = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabsConten.forEach(tabContents => {
      tabContents.classList.remove('quali__active')
    })
    target.classList.add('quali__active')

    tabs.forEach(tab => {
      tab.classList.remove('quali__active')
    })
    tab.classList.add('quali__active')
  })
})


// ===========swiper bar================//

// let swiper = new Swiper(".portfolio__container", {
//   cssMode: true,
//   loop:true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });