/* Abre e fecha o menu quando clica no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle){
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* Quando pasar altura do header adicionar boxshadow */
function changeHeaderWhenScroll(params) {
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* Testimonials Carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/* Scroll reveal: Mostrar elemntos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    durantion: 900,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #abot .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    {
        interval:100
    }
)

/* Botao voltar para o topo */
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8)  * 4

    for (const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

/* When Scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
})