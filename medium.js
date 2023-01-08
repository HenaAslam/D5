
function colorChange(){
    const navbar = document.getElementsByClassName('navbar')[0];
    if (window.scrollY > 620) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
}
window.onscroll = colorChange


function bringM(){
    const area=document.querySelector('.heroright')
    fetch('/index.html')
    .then(res=>res.text())
    .then(data=>{
        area.innerHTML=data
    })
}
bringM()


function mAnimation() {
    let toggle = document.querySelectorAll("svg > g > g > g");
    let random = Math.floor(Math.random() * toggle.length);
    let randomly = Math.floor(Math.random() * 2);
    toggle[random].style.opacity = randomly;
  }
  function toggler() {
    setInterval(mAnimation, 50);
  }
  toggler();