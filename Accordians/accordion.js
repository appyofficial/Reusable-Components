const accordions = document.querySelectorAll('.accordion');
const plusSign = document.querySelectorAll('.plus');

accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        if (acc.nextElementSibling.style.display === 'block') {
            acc.nextElementSibling.style.display = 'none';
            plusSign.innerText = "+";
        } else {
            acc.nextElementSibling.style.display = 'block';
            plusSign.innerText = "-";
        }
    });
});