// Slider
function Slider() {
    this.slides = document.querySelectorAll(".slider-content");
    let currentSlide = 0;

    this.prev = () => {
        this.slides[currentSlide].classList.remove("showed-slide");
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = this.slides.length - 1;
        }
        this.slides[currentSlide].classList.add("showed-slide");
    };

    this.next = () => {
        this.slides[currentSlide].classList.remove("showed-slide");
        currentSlide++;
        if (currentSlide >= this.slides.length) {
            currentSlide = 0;
        }
        this.slides[currentSlide].classList.add("showed-slide");
    }

    document.getElementById("prev-arrow").addEventListener("click", this.prev);
    document.getElementById("next-arrow").addEventListener("click", this.next);
}

// Sort images in portfolio
function Sorter() {
    const buttons = document.querySelectorAll(".sort-button");

    let currentButton = buttons[0];

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            currentButton.classList.remove("current-choice");
            button.classList.add("current-choice");
            currentButton = button;

            const theme = button.id;

            this.sortGallery(theme);
        });
    });

    this.sortGallery = (theme) => {
        document.querySelectorAll(".portfolio-pic").forEach(pic => {
            pic.style.display = "none";
        });
        if (theme === "all") {
            document.querySelectorAll(".portfolio-pic").forEach(pic => {
                pic.style.display = "block";
            });
        } else {
            document.querySelectorAll(`.${theme}`).forEach(pic => {
                pic.style.display = "block";
            })
        }
    }
}

// Phones toggle buttons
function Toggler() {
    const areas = document.querySelectorAll('.phone-area');

    areas.forEach(area => {
        area.addEventListener("click", () => {
            const screenClass = area.id;
            console.log(screenClass);
            const screen = document.querySelector(`.${screenClass}`);
            if (screen.classList.contains("black-screen")) {
                screen.classList.remove("black-screen");
            } else {
                screen.classList.add("black-screen");
            }
        });
    });
}

// Init block
window.onload = function () {
    const slider = new Slider();
    const sorter = new Sorter();
    const toggler = new Toggler();
}
