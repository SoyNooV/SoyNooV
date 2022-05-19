function menuSlide() {
    document.querySelector(".nav_footer").style.transition = "margin 2s ease";
    document.querySelector(".nav_footer").style.marginTop = 26 + "vh";
    document.querySelector(".nav_footer").style.cursor = "pointer";
    // Añadir animación de vuelta
    document.querySelector(".div_main").style.animation = "menuCome 2s ease"; 
}

function menuSlideReverse() {
    document.querySelector(".nav_footer").style.transition = "margin 2s ease";
    document.querySelector(".nav_footer").style.marginTop = -63 + "vh";
    document.querySelector(".nav_footer").style.cursor = "default";
    // Añadir animación de ida
    document.querySelector(".div_main").style.animation = "menuGone 2s ease"; 
}