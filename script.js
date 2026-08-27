/* =================================================
   MOBILE MENU
================================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* =================================================
   CLOSE MOBILE MENU AFTER CLICK
================================================= */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =================================================
   BACK TO TOP
================================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =================================================
   SCROLL REVEAL
================================================= */

const revealElements = document.querySelectorAll(
    ".reason-card, .theory-card, .objective, .timeline-item, .benefit-card, .member, .feedback-box, .stat-card, .chart-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =================================================
   WATER DROP EFFECT
================================================= */

function createDrop() {

    const drop = document.createElement("div");

    drop.innerHTML = "💧";

    drop.style.position = "fixed";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.top = "-50px";

    drop.style.fontSize =
        Math.random() * 15 + 10 + "px";

    drop.style.opacity =
        Math.random() * 0.5 + 0.2;

    drop.style.pointerEvents = "none";

    drop.style.zIndex = "1";

    document.body.appendChild(drop);


    const duration =
        Math.random() * 3000 + 3000;


    drop.animate(

        [
            {
                transform: "translateY(0)"
            },

            {
                transform:
                    `translateY(${window.innerHeight + 100}px)`
            }
        ],

        {
            duration: duration,
            easing: "linear"
        }

    ).onfinish = () => {

        drop.remove();

    };

}


/* สร้างหยดน้ำทุก ๆ 1.5 วินาที */

setInterval(createDrop, 1500);


/* =================================================
   ACTIVE NAVIGATION
================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.style.color = "#63d8ff";

        }

    });

});
