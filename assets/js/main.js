// MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");


// MENU SHOW
//Valida si la constante existe
if (navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
        
    })
}
// MENU HIDDEN
//Valida si la constante existe
if (navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}

// ELIMINAR MENU MÓVIL
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));


// ANIMACIÓN DE TYPING EN EL HOME__SUBTITLE
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web app developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Ui/Ux designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Autodidacta";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Soñador";
    }, 16000);
}

textLoad();
setInterval(textLoad, 16000);



// ACORDEÓN DE SKILLS
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener("click", toggleSkills);
})



// QUALIFICATION TABS
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("qualification__active")
        });
        target.classList.add("qualification__active");

        tab.forEach(tab =>{
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active")

    })
});


// SERVICES MODAL
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("active-modal")
        })
    })
})

//PORTFOLIO SWIPER
let swiperPortfolio = new Swiper(".portfolio__container", {
    //TODO: cssMode provoca bug en el swiper del portafolio, revisar.
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    }
    
});


//TESTIMONIAL
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }

});


//SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=]" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=]" + sectionId + "]").classList.add("active-link");
        }

    })

}


//CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById("header");
    //Cuando el scroll sea más grande que el ancho viewport de 200, añade la clase scroll-header
    if(this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


//SHOW SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    //Cuando el scroll supera el valor de 560 en el ancho(height) del viewport, añade la clase "show-scroll"
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


//DARK LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Tema seleccionado previamente (si está seleccionada por el usuario);
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//Se captura el tema que ahora mismo la interfaz está cargando validando el tema oscuro.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon": "uil-sun";

//Se valida si el usuario ya había elegido previamente un tema
if (selectedTheme) {
    //Si se cumple la validación, se pregunta cuál fue el problema para saber si activamos o desactivamos el tema oscuro
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
}

//Activar / Desactivar el tema manualmente mediante click al botón
themeButton.addEventListener("click", () => {
    //Añade o remueve el tema oscuro/icono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Guardamos la elección que el usuario hizo
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

//COLOR-SWITCHER
document.querySelector(".switcher-btn").onclick = () => {
    document.querySelector(".color-switcher").classList.toggle("active");
}

let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach(color =>{

    color.addEventListener("click", () =>{
        let dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--hue-color", dataColor);
    })

})

//SCROLL SECTION ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); //Observa todos los elementos en "hidden"
