// DOM Document Object Model
/* Abre e fecha o menu quando clicar no icone: a direta*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function chageHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }

}


// Depoimento Carrocel
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

//Scrollreveal = Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top', 
  distance: '30px',
  durance: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .imagem, #home .text 
  #about .imagem, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `
  , {interval: 100})

  //botão voltar ao topo
  const backToTopButton = document.querySelector('.back-to-top')
  function backToTop() {
    
    if(this.window.scrollY >= 600) {
      backToTopButton.classList.add('show')
    }else {
      backToTopButton.classList.remove('show')
    }

  }
  /* Menu ativo conforme a seção na página  */
  const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if(checkpointStart && checkpointEnd) {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
      }else {
        document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
      }

    }
  }

  window.addEventListener('scroll', function() {
    chageHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  
  }) 

  
