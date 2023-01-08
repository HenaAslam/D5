
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


function mHideandShow() {
    let Mnode = document.querySelectorAll("svg > g > g > g");
    let random = Math.floor(Math.random() * Mnode.length);
    let opacity = Math.floor(Math.random() * 2);
    Mnode[random].style.opacity = opacity;
  }
  function interval() {
    setInterval(mHideandShow, 50);
  }
  interval();
