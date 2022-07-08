const menu = document.querySelector('#menu');

menu.addEventListener("click", () => {
    if(menu.getAttribute('src') === "../img/menu.png"){
        document.getElementById('home').style.display = "none";
        menu.setAttribute("src", "../img/x.png");
        document.querySelector(".navbar").classList.toggle("canou");
        document.querySelector(".navbar").classList.toggle("navbarMask");
    } else if(menu.getAttribute('src') === "../img/x.png"){
        document.getElementById('home').style.display = "flex";
        menu.setAttribute("src", "../img/menu.png");
        document.querySelector(".navbar").classList.toggle("canou");
        document.querySelector(".navbar").classList.toggle("navbarMask");
    } else {
        console.log("Ya un bug !");
    }
});

function controlContainer(x) {
    if (x.matches) {
            document.getElementById('home').style.display = "grid";
    } else {
        if(document.querySelector(".navbar").classList.contains("canou")){
            document.getElementById('home').style.display = "none";
        } else{
            document.getElementById('home').style.display = "flex";
        }
    }
}
var x = window.matchMedia("(min-width: 870px)")
controlContainer(x) 
x.addListener(controlContainer)