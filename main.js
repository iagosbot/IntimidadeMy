/* alert('Sabia disso ? ' + 14) */

/*  em Java Script, chamamos 'char' de caractere 
colocamos os caracteres em aspas 'just like this' 
que é uma String*/

/* em Colcheias, usamos para estruturar os dados. As colcheias são
OBJETOS {object} */

/*  Ex    
{

name: 'Ageu'
cor: 'vermelho'
correr: function() {

}

}

temos um atributo de cor vermelha

*/

/* var nome = 'Iago'
nome = 'Ageu'

alert(nome) */

/* dessa forma, a variavel nome recebe Iago... ou .. 
Iago é atribuido a variavel nome.
Ela varia... sendo agora o nome "Ageu" por conta da ordem  */

/* as Constantes não podem variar como no caso dessa ultima

colocando const ao invés de var , aquela variavel não se altera */

/* Abre e fecha o menu quando clicar no ícone ... de X e menu */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*  Quando clilcar em um item do menu, fechar toodo o menu
(ou esconder) */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /* scroll é maior que a altura do header */
    header.classList.add('scroll1')
  } else {
    /* menor que a altura do header */
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS ... ou ... Carousel ; Slider; Swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials
 #contact .text, #contact .links,
 footer .brand, footer .social
 `,
  { interval: 100 }
)

/* Botão voltar para o top */

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = document.querySelectorAll('main section[id]')
/* pegue todas as seções que contenham ID.. todas as tags seções que contenham ID */
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
