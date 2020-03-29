const $ = document;

// Slider
const slider = (function () {
    const slides = $.querySelectorAll(".slider-content");
    let currentSlide = 0;

    $.getElementById("prev-arrow").onclick = () => {
        slides[currentSlide].classList.remove("showed-slide");
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].classList.add("showed-slide");
    };

    $.getElementById("next-arrow").onclick = () => {
        slides[currentSlide].classList.remove("showed-slide");
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].classList.add("showed-slide");
    }
})();


// Portfolio gallery
const portfolio = (function () {
    const buttons = $.querySelectorAll(".sort-button");
    const images = $.querySelectorAll(".portfolio-pic");

    let currentButton = buttons[0];
    let currentPic;

    $.querySelector(".portfolio-buttons").addEventListener("click", (e) => {
        const target = e.target;
   
        if (target.classList.contains("sort-button")) {
            e.preventDefault();

            currentButton.classList.remove("current-choice");
            e.target.classList.add("current-choice");
            currentButton = e.target;
            if (currentPic) currentPic.classList.remove("pic-with-border");

            sortGallery();
        }
        else return;
    })


    images.forEach(pic => {
        pic.onclick = () => {
            addBorder(pic);
        }
    });

    const sortGallery = () => {
        images.forEach(pic => {
            const random = Math.floor(Math.random() * (1 - 12) + 1);
            pic.style.order = `${random}`;
        });
    }

    const addBorder = (pic) => {
        if (currentPic) currentPic.classList.remove("pic-with-border");
        if (currentPic == pic) {
            currentPic = undefined;
            return;
        }
        currentPic = pic;
        currentPic.classList.toggle("pic-with-border");
    }
})();

// Phones toggle buttons
const toggler = (function () {
    const screens = $.querySelectorAll('.toggle-screen');


    screens.forEach(screen => {
        screen.onclick = (e) => {
            screen.classList.toggle("black-screen");
        };
    });
})();

const modal = (function () {
    const form = $.querySelector("form");
    const modal = $.querySelector(".modal");
    let subject;
    let describe;

    $.querySelector("#modal-button").onclick = (e) => {
        modal.style.display = "none";
        form.reset();
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        subject = form.subject.value !== "" ? form.subject.value : "Без темы";
        describe = form.describe.value !== "" ? form.describe.value : "Без описания";
        
        modal.style.display = "block";
        $.querySelector(".form-data > .data").innerHTML = `
                <div>
                <p>Тема:</p>
                <p>${subject}</p>
                </div>
                <div>
                <p>Описание:</p>
                <p>${describe}</p>
                </div>
                </div>
        `
    }
})();

const navigation = (function () {
    const anchors = $.querySelectorAll(".navbar > a");

    let current = anchors[0];

    $.addEventListener("scroll", () => {
        let centerX = document.documentElement.clientWidth / 2;
        let centerY = document.documentElement.clientHeight / 2;
        let currentSection = document.elementFromPoint(centerX, centerY).closest("section").classList[0];

        current.classList.remove("is-active-nav");
        $.querySelector(`a[href$=${currentSection}]`).classList.add("is-active-nav");
        current = $.querySelector(`a[href$=${currentSection}]`);
    });

    const burger = $.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('open-burger')
    });
})();

