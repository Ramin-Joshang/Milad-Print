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
    slidesPerView: 1,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1536: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
    },
});

const accordion = document.getElementById("accordion").children;
let isAccordionOpen = false;
let prevIndex = 0;
let currentIndex = 0;
[...accordion].forEach((element, index) => {
    element.addEventListener("click", (e) => {
        let title = element.getElementsByTagName("h2")[0];
        if (!isAccordionOpen) {
            [...accordion].forEach(element => {
                element.classList.remove("bg-primary");
                element.classList.add("bg-white");
                element.classList.remove("h-40");
                element.classList.add("h-[70px]");
                element.getElementsByTagName("h2")[0].classList.remove("text-white")
                element.getElementsByTagName("h2")[0].classList.add("text-[#7B7D7E]")
                element.getElementsByTagName("span")[0].classList.remove("hidden")
                element.getElementsByTagName("span")[1].classList.add("hidden")
                // element.getElementsByTagName("span")[0].classList.add("text-[#7B7D7E]")
                // element.getElementsByTagName("span")[0].classList.add("text-[#7B7D7E]")

            })
            element.classList.add("bg-primary");
            element.classList.remove("bg-white");
            element.classList.add("h-40");
            element.classList.remove("h-[70px]");
            element.getElementsByTagName("h2")[0].classList.add("text-white")
            element.getElementsByTagName("h2")[0].classList.remove("text-[#7B7D7E]")
            element.getElementsByTagName("span")[1].classList.remove("hidden")
            element.getElementsByTagName("span")[0].classList.add("hidden")
            isAccordionOpen = true;
            prevIndex = index;
            console.log(prevIndex, currentIndex)
        } else {
            currentIndex = index;
            if (currentIndex === prevIndex) {
                element.classList.remove("bg-primary");
                element.classList.add("bg-white");
                element.classList.remove("h-40");
                element.classList.add("h-[70px]");
                element.getElementsByTagName("h2")[0].classList.remove("text-white")
                element.getElementsByTagName("h2")[0].classList.add("text-[#7B7D7E]")
                element.getElementsByTagName("span")[0].classList.remove("hidden")
                element.getElementsByTagName("span")[1].classList.add("hidden")
            } else {
                accordion[prevIndex].classList.remove("bg-primary");
                accordion[prevIndex].classList.add("bg-white");
                accordion[prevIndex].classList.remove("h-40");
                accordion[prevIndex].classList.add("h-[70px]");
                accordion[prevIndex].getElementsByTagName("h2")[0].classList.remove("text-white")
                accordion[prevIndex].getElementsByTagName("h2")[0].classList.add("text-[#7B7D7E]")
                accordion[prevIndex].getElementsByTagName("span")[0].classList.remove("hidden")
                accordion[prevIndex].getElementsByTagName("span")[1].classList.add("hidden")
                element.classList.add("bg-primary");
                element.classList.remove("bg-white");
                element.classList.add("h-40");
                element.classList.remove("h-[70px]");
                element.getElementsByTagName("h2")[0].classList.add("text-white")
                element.getElementsByTagName("h2")[0].classList.remove("text-[#7B7D7E]")
                element.getElementsByTagName("span")[1].classList.remove("hidden")
                element.getElementsByTagName("span")[0].classList.add("hidden")
            }
            console.log(prevIndex, currentIndex)
            isAccordionOpen = false;
        }
    })
})

const swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1536: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
    },
});