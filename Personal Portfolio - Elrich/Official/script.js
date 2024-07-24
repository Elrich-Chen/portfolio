function toggleMenu(){
    const Menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    Menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const splash = document.querySelector('.splash');
let text = document.querySelector('.splash .splash-text')

document.addEventListener('DOMContentLoaded', (e)=>{

    setTimeout(()=>{
        text.classList.add('active')
    });
    
    setTimeout(()=>{
        splash.classList.add('vanish')
    }, 1000)
})
