const myHeader = document.querySelector("header");
const linkNavbar = document.querySelectorAll('.navbar a');
const buttonLang = document.querySelector('button#lang');
const logo = document.querySelector('#logo');
const imgLogos = document.querySelectorAll('.icones div img');
const menu = document.querySelector('#menu');
const images = document.querySelectorAll(".essai");


function headerScroll(){
        myHeader.style.backgroundColor = "#5bcba7";  
        myHeader.style.paddingTop = "0px";
        buttonLang.style.border = "3px solid #050a30";
        buttonLang.style.color = "#5bcba7";
        buttonLang.style.backgroundColor = "#050a30";
        logo.src = "../img/logo-noir.png";
        for(let i=0; i < linkNavbar.length; i++){
            linkNavbar[i].style.color = "#050a30";
        }
}

function headerNoScroll(){
    myHeader.style.backgroundColor = "transparent";
    myHeader.style.paddingTop = "70px";
    buttonLang.style.border = "3px solid #5bcba7";
    buttonLang.style.color = "#5bcba7";
    buttonLang.style.backgroundColor = "#050a30";
    logo.src = "../img/logo-blanc.png";
    for(let i=0; i < linkNavbar.length; i++){
        linkNavbar[i].style.color = "#5bcba7";
    }
}

function myFunction(x) {
    if (x.matches) {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 20){
                headerScroll();
            } else {
                headerNoScroll();
            }
        })
        window.addEventListener("load", () => {
            if(window.scrollY > 20){
                headerScroll();
            }
        });
    } else {
      console.log("Oklm");
    }
  }
  
  var x = window.matchMedia("(min-width: 798px)")
  myFunction(x) 
  x.addListener(myFunction)


  function myFunction2(x) {
    if (x.matches) {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 20){
                myHeader.style.paddingTop = "0";
                myHeader.style.backgroundColor = "#5bcba7"; 
                for(let i=0; i < linkNavbar.length; i++){
                    linkNavbar[i].style.color = "#5bcba7";
                }
                buttonLang.style.border = "3px solid #5bcba7";
                buttonLang.style.color = "#5bcba7";
                buttonLang.style.backgroundColor = "#050a30";
            } else {
                myHeader.style.paddingTop = "0";
                myHeader.style.backgroundColor = "#5bcba7";
            }
        })
    } else {
      console.log("Oklm");
    }
  }
  
  var x = window.matchMedia("(max-width: 798px)")
  myFunction2(x) 
  x.addListener(myFunction2)

function animLogos(){
    for(let i=0; i < imgLogos.length; i++){
        turnLogos(i);  
    }
    
    function turnLogos(i) {
        imgLogos[i].animate([
            { transform: 'rotate3d(1, 2, 3, 360deg)'}
          ], {
            duration: 700,
            iterations: 1,
            delay: 700*i
        });     
    }
}

// Turn logos
window.addEventListener("load", () => {
    animLogos();
});

// Responsive Header
menu.addEventListener("click", () => {
    if(menu.getAttribute('src') === "../img/menu.png"){
        menu.setAttribute("src", "../img/x.png");
        document.querySelector(".navbar").classList.toggle("canou");
        document.querySelector(".navbar").classList.toggle("navbarMask");
    } else if(menu.getAttribute('src') === "../img/x.png"){
        menu.setAttribute("src", "../img/menu.png");
        document.querySelector(".navbar").classList.toggle("canou");
        document.querySelector(".navbar").classList.toggle("navbarMask");
    } else {
        console.log("Ya un bug !");
    }
});


// Slide pictures

function slide(x) {
    if (x.matches) {
        
        document.getElementById('arriere').addEventListener("click", () => {
            slideImg(-1);
        });

        document.getElementById('avant').addEventListener("click", () => {
            slideImg(1);
        });

        function slideImg(n) {
            showImg(slideIndex += n);
        }

        var slideIndex = 1;
        showImg(slideIndex);

        function showImg(n) {
        var i;
        if (n > images.length) {slideIndex = 1}
        if (n < 1) {slideIndex = images.length}
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none"; 
            if(i === slideIndex-1){
                images[i].style.display = "block";
            }
        }
        // images[slideIndex-1].style.display = "block";  
        }
    } else {
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "block"; 
        }
    }
  }

var x = window.matchMedia("(max-width: 420px)")
slide(x) 
x.addListener(slide)