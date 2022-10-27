
/* ------------------------ MENU ------------------------ */
let Header = document.querySelector(".Header")
let MenuClose = document.querySelectorAll(".close")
/* ----------------------- HEADER ----------------------- */
let Nav = document.querySelector(".wrapper-nav")
let MenuBurger = document.querySelector(".MenuBurger")
if (window.scrollY >= 80) {
    Header.classList.add("active")
}

window.addEventListener("scroll", () => {
    window.scrollY >= 80
        ? Header.classList.add("active")
        : Header.classList.remove("active")

})
if (document.querySelectorAll('.list_links')) {
    let NavList = document.querySelectorAll('.list_links')
    NavList.forEach(link => {
        link.addEventListener('click', () => {
            link.classList.toggle('active')
            let height = 0
            let subMenu = link.lastElementChild;
            if (subMenu.clientHeight == "0") {
                height = subMenu.scrollHeight
            }
            subMenu.style.height = height + "px"
        })
    })
}
/* ------------------------- NAV ------------------------ */

MenuBurger.addEventListener("click", () => {
    Nav.classList.toggle("active")
})

// close menu

MenuClose.forEach((iconClose) => [
    iconClose.addEventListener("click", () => {
        Nav.classList.remove("active")
    }),
])


AOS.init({
    once: true,
});

/* --------------------- OWLCAROUSEL -------------------- */
// seller en Seccion Home
if ($(".card_seller_container")) {
    $(".card_seller_container").owlCarousel({
        center: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 150,
        responsive: {
            480: {
                items: 1,
                center: false,
                margin: 0,
            },
            768: {
                items: 2,
                center: false,
                margin: 0,
            },
            992: {
                items: 3,
                center: false,
                margin: 0,
            },
            1200: {
                items: 4,
                center: false,
                margin: 0,
            },
        },
    })
}

/* --------------------- TEXTIMONIAL -------------------- */
if (document.querySelector(".testimonial_carousel")) {
    let testimonialCarousel = $(".testimonial_carousel").owlCarousel({
        center: true,
        items: 1,
        autoplay: true,
        loop: true,
        autoplaySpeed: 600,
        fluidSpeed: 6000,
        dots: true,
        margin: 50,
    })
    let testimonialUser = document.querySelector('.testimonial_user_wrapper')
    const modalContainer = document.getElementById("ModalTestmonial")
    const modalVideo = document.getElementById("Testmonial-video")
    let iconVid = document.querySelector('.icon-vid')
    function changeImage() {
        let itemActive = document.querySelector('.testimonial_carousel .owl-item.active')
        let urlMedia = itemActive.firstElementChild.dataset.media
        let type = itemActive.firstElementChild.dataset.type

        if (type === "video") {
            testimonialUser.innerHTML = `<video class="videoTesti"><source src="${urlMedia}"></video>`
            iconVid.style.display = "block"
            modalVideo.firstElementChild.src = urlMedia
            iconVid.addEventListener('click', () => {
                modalContainer.classList.add("active")
            })
            MenuClose.forEach((iconClose) => [
                iconClose.addEventListener("click", () => {
                    modalContainer.classList.remove("active")
                    modalVideo.firstElementChild.pause()
                }),
            ])
            // cerrar modal por fuera
            modalContainer.addEventListener("click", (e) => {
                if (e.target.id == "ModalTestmonial" || e.target.classList == "container") {
                    modalContainer.classList.remove("active")
                }
            })
        } else {
            testimonialUser.innerHTML = `<img src='${urlMedia}' alt='' loading='lazy' />`
            iconVid.style.display = "none"
        }
    }
    testimonialCarousel.on('initialized.owl.carrusel', changeImage());
    testimonialCarousel.on('translated.owl.carousel', changeImage);
}

/* ---------------- LAST_OFFERS_CAROUSEL ---------------- */
if ($(".last_offers_carousel")) {
    $(".last_offers_carousel").owlCarousel({
        items: 1,
        dots: true,
        autoplayHoverPause: true,
        margin: 150,
        responsive: {
            480: {
                items: 1,
                center: false,
                margin: 0,
            },
            768: {
                items: 2,
                center: false,
                margin: 0,
            },
            992: {
                items: 3,
                center: false,
                margin: 0,
            },
            1200: {
                items: 4,
                center: false,
                margin: 0,
            },
        },
    })
}


/* ---------------------- QUESTIONS --------------------- */

if (document.querySelector('.item_answer')) {
    let itemQuestions = document.querySelectorAll('.item_answer')
    itemQuestions[0].classList.add('active')
    let HeightItemBody = itemQuestions[0].lastElementChild.scrollHeight
    itemQuestions[0].lastElementChild.style.height = HeightItemBody + "px"
    itemQuestions.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
            if (item.classList.contains('active')) {
                let HeightItemBody = item.lastElementChild.scrollHeight
                item.lastElementChild.style.height = HeightItemBody + "px"
            } else {
                item.lastElementChild.style.height = "0px"
            }
            itemQuestions.forEach(item2 => {
                if (item2 !== item) {
                    item2.classList.remove('active')
                    item2.lastElementChild.style.height = "0px"
                }
            })
        })
    })
}

// social 

window.addEventListener('scroll', () => {
    let wy = window.scrollY + 600
    if (window.scrollY < 200 || document.querySelector('main').clientHeight < wy) {
        document.querySelector('.Social_float').style.opacity = "0"
        document.querySelector('.Social_float').style.pointerEvents = "none"

    } else {
        document.querySelector('.Social_float').style.opacity = "1"
        document.querySelector('.Social_float').style.pointerEvents = "all"
    }

})

