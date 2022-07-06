const myHeader = document.querySelector("header");
const linkNavbar = document.querySelectorAll('.navbar a');
const buttonLang = document.querySelector('button#lang');
const text = document.querySelector('.container h1');
const logo = document.querySelector('#logo');
const imgLogos = document.querySelectorAll('.icones div img');


function headerScroll(){
        myHeader.style.backgroundColor = "#5bcba7";  // vert
        myHeader.style.paddingTop = "0";
        buttonLang.style.border = "3px solid #050a30";   // noir
        buttonLang.style.color = "#050a30";
        logo.src = "../img/logo-noir.png";
        for(let i=0; i < linkNavbar.length; i++){
            linkNavbar[i].style.color = "#050a30";
        }
}

function headerNoScroll(){
    myHeader.style.backgroundColor = "transparent";   //Normal
    myHeader.style.paddingTop = "70px";
    buttonLang.style.border = "3px solid #5bcba7";
    buttonLang.style.color = "#5bcba7";
    logo.src = "../img/logo-blanc.png";
    for(let i=0; i < linkNavbar.length; i++){
        linkNavbar[i].style.color = "#5bcba7";
    }
}

window.addEventListener("scroll", () => {
    if(window.scrollY > 70){
        headerScroll();
    } else {
        headerNoScroll();
    }
})

window.addEventListener("load", () => {
    setInterval(turnImages, 6300);
    if(window.scrollY > 70){
        headerScroll();
    }
});

turnImages();

function turnImages(){
    for(let i=0; i < imgLogos.length; i++){
        animLogos(i);  
    }
    
    function animLogos(i) {
        imgLogos[i].animate([
            { transform: 'rotate3d( 1, 2, 3, 360deg)'}
          ], {
            duration: 700,
            iterations: 1,
            delay: 700*i
        });     
    }
}