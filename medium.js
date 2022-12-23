
function colorChange(){
    const navbar = document.getElementsByClassName('navbar')[0];
    if (window.scrollY > 620) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
}
window.onscroll = colorChange
