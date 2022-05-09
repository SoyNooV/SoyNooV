function menuSlide() {
    document.querySelector(".nav_footer").style.transition = "margin 2s ease";
    document.querySelector(".nav_footer").style.marginTop = 80 + "vh";
    document.querySelector(".nav_footer").style.cursor = "pointer";
}

function menuSlideReverse() {
    document.querySelector(".nav_footer").style.marginTop = 3 + "vh";
    document.querySelector(".nav_footer").style.cursor = "default";
}