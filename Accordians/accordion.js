const accordions = document.querySelectorAll('.accordion');


accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        if (acc.nextElementSibling.style.display === 'block') {
            acc.nextElementSibling.style.display = 'none';
        } else {
            acc.nextElementSibling.style.display = 'block';
        }
    });
});