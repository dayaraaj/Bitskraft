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
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuu-toggle');
  const menu = document.getElementById('menuu');

  menuButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');
  });
});

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.remove('bg-white');
    }
  });

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbarinit');
    if (window.scrollY > 200) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }
  });
