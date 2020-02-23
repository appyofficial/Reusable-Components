//selector
const slidesContainer = document.querySelector('.slides-container');

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
    },
    {
        img: "../images/mountain5.jpg",
        captiontext: "This is fantastic."
    },
    {
        img: "../images/mountain6.jpg",
        captiontext: "This is fantastic."
    }
];

//creating slides
let html = "";
images.forEach(slide => {
    html += `
    <div class="mySlides">
        <div class="numbertext">${images.indexOf(slide) + 1} / ${images.length}</div >
        <img src=${slide.img} style="width:100%">
    </div>
    `;
});
slidesContainer.innerHTML = html;


