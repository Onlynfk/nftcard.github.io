const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) { //close humburger menu
        header.classList.remove('open');
        body.classList.remove("noscroll");
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } 
    else
     { 
        // open hamburger menu
        body.classList.add("noscroll");
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
})
