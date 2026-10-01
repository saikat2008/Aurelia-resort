/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .facility-card, .room-card, .gallery-item, .showcase-card, .experience-content, .about-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity .8s ease, transform .8s ease";

    revealObserver.observe(element);

});


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for choosing Aurelia Resort.\n\nYour stay request has been received."
    );

    bookingForm.reset();

});


/* ================= IMAGE GALLERY CLICK ================= */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if (!image) return;

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.92)";
        overlay.style.zIndex = "9999";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "30px";
        overlay.style.cursor = "zoom-out";

        const largeImage = document.createElement("img");

        largeImage.src = image.src;

        largeImage.style.maxWidth = "95%";
        largeImage.style.maxHeight = "90vh";
        largeImage.style.objectFit = "contain";
        largeImage.style.boxShadow = "0 20px 80px rgba(0,0,0,.7)";

        overlay.appendChild(largeImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});