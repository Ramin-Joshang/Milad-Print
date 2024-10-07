const swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 20,
    loop: true,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,

    watchSlidesProgress: true,
});

const swiper7 = new Swiper(".mySwiper7", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper6,
    },

});


const navbarDropdownCategories = document.getElementById("navar-menu-category")?.children;
const navbarDropdownProducts = document.getElementById("navbar-menu-products")?.children;
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
document.addEventListener('click', function (event) {
    // Check if the click is outside of the mobile menu
    if (!navbar.contains(event.target) && !navbarBtn.contains(event.target)) {
        navbar.classList.add("-right-64");
        navbar.classList.remove("-right-0");
        navbarBtnIcon[1].classList.add("hidden");
        navbarBtnIcon[0].classList.remove("hidden");
        isNavbarOpen = false;
    }
});

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

window.addEventListener("load", () => {
    const accordion = document.getElementById("first-accordion");
    if (accordion) {

        console.log(accordion)
        accordion.style.maxHeight = accordion.scrollHeight + 'px';
        accordion.classList.remove("max-h-[70px]");
        accordion.classList.add("bg-primary");
        accordion.classList.remove("bg-white");
        accordion.getElementsByTagName("h2")[0].classList.add("text-white")
        accordion.getElementsByTagName("h2")[0].classList.remove("text-[#7B7D7E]")
        accordion.getElementsByTagName("span")[1].classList.remove("hidden")
        accordion.getElementsByTagName("span")[0].classList.add("hidden")
    }
})

function accordionToggle(element) {
    console.log(element)
    if (element.classList.contains("max-h-[70px]")) {
        const allAccordions = document.getElementById("accordion").children;
        [...allAccordions].forEach(accordion => {
            accordion.style.maxHeight = 70 + "px";
            accordion.classList.add("max-h-[70px]");
            accordion.classList.remove("bg-primary");
            accordion.classList.add("bg-white");
            accordion.getElementsByTagName("h2")[0].classList.remove("text-white")
            accordion.getElementsByTagName("h2")[0].classList.add("text-[#7B7D7E]")
            accordion.getElementsByTagName("span")[0].classList.remove("hidden")
            accordion.getElementsByTagName("span")[1].classList.add("hidden")
        })
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



const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        console.log(target)

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            const tabIconContainer = btn.querySelector("#tab-icon").children;
            tabIconContainer[0].classList.remove("hidden");
            tabIconContainer[1].classList.add("hidden");
        });

        // Show the target content
        const content = [...tabContents].filter(content => content.getAttribute('data-target') === target);
        console.log(content)
        content.forEach(item => {
            item.classList.remove('hidden');
        })

        const tabIconContainer = button.querySelector("#tab-icon").children;
        console.log(tabIconContainer)
        tabIconContainer[0].classList.add("hidden");
        tabIconContainer[1].classList.remove("hidden");
    });
});




const orderTabButtons = document.querySelectorAll('.order-tab-btn');
const orderTabContents = document.querySelectorAll('.order-tab-content');

orderTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');
        console.log(target)

        // Hide all tab contents
        orderTabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Remove active class from all buttons
        // orderTabButtons.forEach(btn => {
        //     const tabIconContainer = btn.querySelector("#tab-icon").children;
        //     tabIconContainer[0].classList.remove("hidden");
        //     tabIconContainer[1].classList.add("hidden");
        // });

        // Show the target content
        const content = [...orderTabContents].filter(content => content.getAttribute('data-tab') === target);
        console.log(content)
        content.forEach(item => {
            item.classList.remove('hidden');
        })

        // const tabIconContainer = button.querySelector("#tab-icon").children;
        // console.log(tabIconContainer)
        // tabIconContainer[0].classList.add("hidden");
        // tabIconContainer[1].classList.remove("hidden");
    });
});


const orderTabButtons2 = document.querySelectorAll('.order-tab-btn-2');
const orderTabContents2 = document.querySelectorAll('.order-tab-content-2');

orderTabButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab-2');
        console.log(target)

        // Hide all tab contents
        orderTabContents2.forEach(content => {
            content.classList.add('hidden');
        });

        // Remove active class from all buttons
        // orderTabButtons.forEach(btn => {
        //     const tabIconContainer = btn.querySelector("#tab-icon").children;
        //     tabIconContainer[0].classList.remove("hidden");
        //     tabIconContainer[1].classList.add("hidden");
        // });

        // Show the target content
        const content = [...orderTabContents2].filter(content => content.getAttribute('data-tab-2') === target);
        console.log(content)
        content.forEach(item => {
            item.classList.remove('hidden');
        })

        // const tabIconContainer = button.querySelector("#tab-icon").children;
        // console.log(tabIconContainer)
        // tabIconContainer[0].classList.add("hidden");
        // tabIconContainer[1].classList.remove("hidden");
    });
});

const userSidebar = document.getElementById("user-sidebar");
const userSidebarBtn = document.getElementById("user-sidebar-btn");
const userSidebarTitle = document.getElementById("user-sidebar-title");
const userSidebarText = document.querySelectorAll(".user-sidebar-text");
console.log(userSidebarTitle, userSidebarText)
let isUserSidebarOpen = false;
userSidebarBtn.addEventListener("click", () => {
    if (userSidebar.classList.contains("w-16")) {
        userSidebar.classList.add("w-[500px]");
        userSidebar.classList.remove("w-16");
        userSidebarTitle.classList.remove("hidden");
        userSidebarText.forEach(text => {
            text.classList.remove("hidden");
        })
    } else {
        userSidebar.classList.remove("w-[500px]");
        userSidebar.classList.add("w-16");
        userSidebarTitle.classList.add("hidden");
        userSidebarText.forEach(text => {
            text.classList.add("hidden");
        })
    }
})