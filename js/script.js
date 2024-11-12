document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.animated-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.1)';
            } else {
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.5 });

    images.forEach(image => observer.observe(image));

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = event.target.getAttribute('href');
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
//




window.addEventListener("DOMContentLoaded", () => {
    const tabbar = new TabBar("nav");
});

class TabBar {
    /** Tab bar element */
    el;

    /**
     * @param {string} el CSS selector for the tab bar
     */
    constructor(el) {
        this.el = document.querySelector(el);

        if (this.el) {
            this.el.setAttribute("data-pristine", "true");
            this.el.addEventListener("click", this.switchTab.bind(this));
        }
    }

    /**
     * Make the clicked tab active.
     * @param {Event} e Click event
     */
    switchTab(e) {
        // Allow animations, which were prevented on load
        if (this.el) {
            this.el.removeAttribute("data-pristine");
        }

        // Ensure the event target is a link
        const target = e.target.closest('a');

        if (target && target.tagName === 'A') {
            const href = target.getAttribute("href");

            if (href) {
                // Remove the state from the current page
                const currentPage = this.el?.querySelector(`[aria-current="page"]`);

                if (currentPage) {
                    currentPage.removeAttribute("aria-current");
                }

                // Apply the state to the new page
                target.setAttribute("aria-current", "page");
            }
        }
    }
}

let currentSlide = 0; // Объявление переменной

const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Увеличение индекса текущего слайда
    showSlide(currentSlide); // Показать текущий слайд
}

// Показываем первый слайд
showSlide(currentSlide);

// Устанавливаем интервал для автоматической прокрутки
setInterval(nextSlide, 3000); // Меняем слайд каждые 3 секунды

const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.animated-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.1)';
            } else {
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.5 });

    images.forEach(image => observer.observe(image));

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = event.target.getAttribute('href');
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2
    };

    const observerSections = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observerSections.observe(section);
    });

    const researchItems = document.querySelectorAll('.research-item h3');
    researchItems.forEach(item => {
        item.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
        });
    });

    // Объявляем переменную currentSlide
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Показываем первый слайд при загрузке
    showSlide(currentSlide);

    // Устанавливаем интервал для автоматической прокрутки
    setInterval(nextSlide, 3000); // Меняем слайд каждые 3 секунды
}); 