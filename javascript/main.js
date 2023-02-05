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