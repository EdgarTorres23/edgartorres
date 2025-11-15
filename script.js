document.addEventListener("DOMContentLoaded", function() {

    // ---------------------------
    // 1️⃣ Navbar dinámico
    // ---------------------------
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
            navbar.style.color = "white";
            navbar.style.transition = "0.5s";
        } else {
            navbar.style.backgroundColor = "transparent";
            navbar.style.color = "white";
        }
    });

    // ---------------------------
    // 2️⃣ Botón de contacto
    // ---------------------------
    const contactoBtn = document.querySelector(".btn.contacto");

    if (contactoBtn) {
        contactoBtn.addEventListener("click", function() {
            alert("Serás redirigido a WhatsApp");
        });

        contactoBtn.addEventListener("mouseenter", () => {
            contactoBtn.style.backgroundColor = "#25D366"; // verde WhatsApp
            contactoBtn.style.color = "white";
            contactoBtn.style.transition = "0.3s";
        });

        contactoBtn.addEventListener("mouseleave", () => {
            contactoBtn.style.backgroundColor = "";
            contactoBtn.style.color = "";
        });
    }

    // ---------------------------
    // 3️⃣ Botón Ver CV (NO afecta al de contacto)
    // ---------------------------
    const verCVBtn = document.querySelector(".btn.cv");

    if (verCVBtn) {
        verCVBtn.addEventListener("mouseenter", () => {
            verCVBtn.style.transform = "translateY(-3px)";
            verCVBtn.style.boxShadow = "0 6px 18px rgba(108, 99, 255, 0.4)";
        });

        verCVBtn.addEventListener("mouseleave", () => {
            verCVBtn.style.transform = "";
            verCVBtn.style.boxShadow = "";
        });
    }

    // ---------------------------
    // 4️⃣ Tarjetas de intereses
    // ---------------------------
    const cards = document.querySelectorAll(".interes-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1)";
            card.style.transition = "transform 0.3s, box-shadow 0.3s";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
            card.style.cursor = "pointer";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });

        card.addEventListener("click", () => {
            alert("Gracias por mostrar interés en: " + card.querySelector("p").textContent);
        });
    });

    // ---------------------------
    // 5️⃣ Aparición de secciones al hacer scroll
    // ---------------------------
    const sections = document.querySelectorAll("section");

    const appearOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease-out";
            }
        });
    };

    // Inicializar opacidad y posición
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
    });

    window.addEventListener("scroll", appearOnScroll);
    appearOnScroll(); // activarlo al cargar

});
