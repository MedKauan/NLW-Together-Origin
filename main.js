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
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials Carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true,
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
    #about .image, #abot .text
    #services header, #services .card
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links`,
    {
        interval:100
    }
)