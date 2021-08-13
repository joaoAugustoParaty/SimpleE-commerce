//Menu Show
const navMenu = document.getElementById('nav-menu'),
      closeNav = document.getElementById('nav-close'),
      toggleNav = document.getElementById('nav-toggle');

//Show Menu
toggleNav.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//Hide Menu
closeNav.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Active & Remove Menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove Menu
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Change header
window.onscroll = ()=>{
    const nav = document.getElementById('header');

    if(this.scrollY >= 200){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}