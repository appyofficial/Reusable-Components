//selectors
const slideShow = document.querySelector('.slideshow');

//Collection of images
const images = [
    {
        img: "../images/mountain1.jpg",
        captiontext: "Beautiful mountain"
    },
    {
        img: "../images/mountain2.jpg",
        captiontext: "Wow! Mountains are amazing."
    },
    {
        img: "../images/mountain3.jpg",
        captiontext: "So cool! Isnt it?"
    },
    {
        img: "../images/mountain4.jpg",
        captiontext: "This is fantastic."
    }
];

//Displaying slides
const displaySlides = () => {
    let html = "";

    images.forEach(slide => {
        html += `
        <div class="mySlides fade">
            <div class="numbertext">${images.indexOf(slide) + 1} / ${images.length}</div>
            <img src=${slide.img} style="width:100%">
                <div class="text">${slide.captiontext}</div>
        </div>`;
    });

    slideShow.innerHTML = html;
};
displaySlides();

//set the value of slide index to 0 if using automatic slides
let slideIndex = 1;
//Showing slides
const showSlides = (index) => {
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');
    if (index > slides.length) { slideIndex = 1 };
    if (index < 1) { slideIndex = slides.length };

    slides.forEach(slide => {
        slide.style.display = 'none'
    });

    dots.forEach(dot => {
        dot.className = dot.className.replace("active", "");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

const plusSlides = (index) => {
    showSlides(slideIndex += index)
}

const currentSlide = (index) => {
    showSlides(slideIndex = index);
}