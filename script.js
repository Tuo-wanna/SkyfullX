// ========== READING PROGRESS BAR ==========
const progressBar = document.querySelector(".reading-progress");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

// Charger la préférence dark mode
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
    document.body.classList.add("dark-mode");
    updateThemeToggle();
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isNowDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isNowDark);
        updateThemeToggle();
    });
}

function updateThemeToggle() {
    if (themeToggle) {
        const isDark = document.body.classList.contains("dark-mode");
        const icon = themeToggle.querySelector(".theme-icon");
        const label = themeToggle.querySelector(".theme-label");

        if (icon) icon.textContent = isDark ? "☀️" : "🌙";
        if (label) label.textContent = isDark ? "Light" : "Dark";
    }
}

// ========== MENU MOBILE ==========
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// ========== COPIER L'EMAIL ==========
const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
        const email = "tuowannaachille@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const originalText = copyEmailBtn.textContent;
            copyEmailBtn.textContent = "✓ Email copié !";
            copyEmailBtn.style.background = "#10b981";

            setTimeout(() => {
                copyEmailBtn.textContent = originalText;
                copyEmailBtn.style.background = "";
            }, 2000);
        });
    });
}

// ========== COMPTEURS ANIMÉS ==========
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

const observerStats = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target.querySelector(".stat-number");
            if (element && !element.hasAttribute("data-animated")) {
                const target = parseInt(element.textContent);
                animateCounter(element, target);
                element.setAttribute("data-animated", "true");
            }
            observerStats.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".stats li").forEach((stat) => {
    observerStats.observe(stat);
});

// ========== ANNÉE COURANTE ==========
document.getElementById("year").textContent = new Date().getFullYear();

// ========== FILTRES DE PROJETS ==========
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Active/Désactive le bouton
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Filtre les projets
        projectCards.forEach((card) => {
            const category = card.getAttribute("data-category");
            if (filter === "tous" || category === filter) {
                card.style.display = "block";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 10);
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
});

// ========== ANIMATIONS AU SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.6s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de compétences et de projets
document.querySelectorAll(".skill-card, .project-card, .timeline-item, .experience-card, .testimonial-card, .certificate-card").forEach((el) => {
    observer.observe(el);
});

// La photo du hero reste fixe pendant le défilement.

// ========== ESPACE LOGIN ==========
const loginModal = document.getElementById("loginModal");
const loginTrigger = document.querySelector(".login-trigger");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

function closeLogin() {
    if (!loginModal) return;
    loginModal.hidden = true;
    document.body.classList.remove("login-open");
    loginTrigger?.setAttribute("aria-expanded", "false");
}

loginTrigger?.addEventListener("click", () => {
    loginModal.hidden = false;
    document.body.classList.add("login-open");
    loginTrigger.setAttribute("aria-expanded", "true");
    document.getElementById("loginEmail")?.focus();
});

document.querySelectorAll("[data-close-login]").forEach((element) => {
    element.addEventListener("click", closeLogin);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLogin();
});

loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    loginMessage.textContent = "Connexion prête. Le serveur d'authentification doit encore être relié.";
    loginMessage.classList.add("visible");
});

// ========== SMOOTH SCROLL POUR LES ANCRES ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    });
});

// ========== CHANGEMENT DE STYLE HEADER AU SCROLL ==========
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== ANIMATION ENTREE ==========
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .skill-card,
    .project-card,
    .timeline-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// ========== LAZY LOADING IMAGES ==========
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = "1";
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll("img").forEach((img) => {
        imageObserver.observe(img);
    });
}