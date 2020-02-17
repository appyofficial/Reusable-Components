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


let slideIndex = 0;
//Showing slides
const showSlides = () => {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => {
        slide.style.display = 'none'
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; };
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2400);
}

showSlides();