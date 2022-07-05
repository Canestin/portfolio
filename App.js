const myHeader = document.querySelector("header");
const linkNavbar = document.querySelectorAll('.navbar a');
const buttonLang = document.querySelector('button#lang');
const text = document.querySelector('.container h1');
const logo = document.querySelector('#logo');

window.addEventListener("scroll", () => {
    if(window.scrollY > 70){
        myHeader.style.backgroundColor = "#5bcba7";  // vert
        myHeader.style.paddingTop = "0";
        buttonLang.style.border = "3px solid #050a30";   // noir
        buttonLang.style.color = "#050a30";
        logo.src = "../img/logo-noir.png";
        for(let i=0; i < linkNavbar.length; i++){
            linkNavbar[i].style.color = "#050a30";
        }
    } else {
        myHeader.style.backgroundColor = "transparent";   //Normal
        myHeader.style.paddingTop = "70px";
        buttonLang.style.border = "3px solid #5bcba7";
        buttonLang.style.color = "#5bcba7";
        logo.src = "../img/logo-blanc.png";
        for(let i=0; i < linkNavbar.length; i++){
            linkNavbar[i].style.color = "#5bcba7";
        }
    }
})