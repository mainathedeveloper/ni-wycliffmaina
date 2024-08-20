let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// *window.onscroll = () => {
//    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

//menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let openIcon = document.querySelector('.open-icon');
let closeIcon = document.querySelector('.close-icon');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    openIcon.style.display = navbar.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = navbar.classList.contains('active') ? 'block' : 'none';
}

window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};
