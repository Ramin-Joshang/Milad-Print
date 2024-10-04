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
function accordionToggle(element) {
    console.log(element)
    if (element.classList.contains("max-h-[70px]")) {
        element.style.maxHeight = element.scrollHeight + 'px';
        element.classList.remove("max-h-[70px]");
        element.classList.add("bg-primary");
        element.classList.remove("bg-white");
        element.getElementsByTagName("h2")[0].classList.add("text-white")
        element.getElementsByTagName("h2")[0].classList.remove("text-[#7B7D7E]")
        element.getElementsByTagName("span")[1].classList.remove("hidden")
        element.getElementsByTagName("span")[0].classList.add("hidden")

    } else {
        element.style.maxHeight = 70 + "px";
        element.classList.add("max-h-[70px]");
        element.classList.remove("bg-primary");
        element.classList.add("bg-white");
        element.getElementsByTagName("h2")[0].classList.remove("text-white")
        element.getElementsByTagName("h2")[0].classList.add("text-[#7B7D7E]")
        element.getElementsByTagName("span")[0].classList.remove("hidden")
        element.getElementsByTagName("span")[1].classList.add("hidden")
    }
}

function searchToggle(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        setTimeout(() => {
            element.classList.add('hidden');
        }, 300); // Match this timeout to the CSS transition duration
    }
}


const dropdown = document.getElementById("mainDropdown");

function mainToggle() {
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    } else {
        dropdown.style.maxHeight = 0;
        setTimeout(() => {
            dropdown.classList.add('hidden');
        }, 300); // Match this timeout to the CSS transition duration
    }
}

function toggle(element) {
    const mainMaxHeight = dropdown.style.maxHeight.split('px')[0];
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.style.maxHeight = element.scrollHeight + 'px';
        dropdown.style.maxHeight = Number(element.scrollHeight) + Number(mainMaxHeight) + 'px';
    } else {
        element.style.maxHeight = 0;
        dropdown.style.maxHeight = mainMaxHeight + "px";
        setTimeout(() => {
            element.classList.add('hidden');
        }, 300); // Match this timeout to the CSS transition duration
    }
}