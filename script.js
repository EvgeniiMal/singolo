const $ = document;


// Slider
function Slider() {
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
}


// Portfolio gallery
function Portfolio() {
    const buttons = $.querySelectorAll(".sort-button");
    const images = $.querySelectorAll(".portfolio-pic");

    let currentButton = buttons[0];
    let currentPic;

    buttons.forEach(button => {
        button.onclick = (e) => {
            e.preventDefault();

            currentButton.classList.remove("current-choice");
            button.classList.add("current-choice");
            currentButton = button;
            if (currentPic) currentPic.classList.remove("pic-with-border");

            sortGallery();
        }
    });

    images.forEach(pic => {
        pic.onclick = () => {
            addBorder(pic);
        }
    });

    const sortGallery = () => {
        images.forEach(pic => {
            const random = Math.floor(Math.random() * (1 - 12) + 1);
            pic.style.order= `${random}`;
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
}

// Phones toggle buttons
function Toggler() {
    const areas = $.querySelectorAll('.phone-area');

    areas.forEach(area => {
        area.onclick = (e) => {
            const screenClass = area.id;
            const screen = $.querySelector(`.${screenClass}`);
            screen.classList.toggle("black-screen");
        };
    });
}

function Modal() {
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
        describe = form.describe.value !== ""? form.describe.value : "Без описания";
        
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
}

function Header() {
    
}



// Init block
window.onload = function () {
    const slider = new Slider();
    const gallery = new Portfolio();
    const toggler = new Toggler();
    const popup = new Modal();

}

