const navbarDropdownCategories = document.getElementById("navar-menu-category").children;
const navbarDropdownProducts = document.getElementById("navbar-menu-products").children;
[...navbarDropdownCategories].forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        [...navbarDropdownCategories].forEach(element => {
            element.classList.remove("text-primary");
            element.classList.remove("text-xs")
            element.classList.add("text-[11px]")
            element.classList.add("text-[#7B7D7E]")
            element.classList.remove("font-bold");
        });
        element.classList.add("text-primary");
        element.classList.remove("text-[11px]")
        element.classList.add("text-xs")
        element.classList.add("font-bold");
        [...navbarDropdownProducts].forEach(element => {
            element.classList.add("hidden");
            navbarDropdownProducts[index].classList.remove("hidden");
        })
    })
});


const navbar = document.getElementById("navbar");
const navbarBtn = document.getElementById("navbar-btn");
const navbarBtnIcon = navbarBtn.children;
console.log(navbarBtnIcon[0], navbarBtnIcon[1])
console.log(navbarBtn)
console.log(navbar)
let isNavbarOpen = false;
navbarBtn.addEventListener("click", () => {
    if (isNavbarOpen) {
        navbar.classList.add("-right-64");
        navbar.classList.remove("-right-0");
        navbarBtnIcon[1].classList.add("hidden");
        navbarBtnIcon[0].classList.remove("hidden");
        isNavbarOpen = false;
    } else {
        navbar.classList.remove("-right-64");
        navbar.classList.add("-right-0");
        navbarBtnIcon[1].classList.remove("hidden");
        navbarBtnIcon[0].classList.add("hidden");
        isNavbarOpen = true;
    }
})

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 6,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
    },
});

const swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 6,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
    },
});