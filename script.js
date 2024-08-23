const accordionHeader = document.querySelectorAll('.accordian_header');

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', event => {
        accordionHeader.classList.toggle('active')
        const accordionBody = accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains('active')){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
        else {
            accordionBody.style.maxHeight = 0;
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});