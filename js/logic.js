// show menu
const navMenu = document.getElementById('nav-menu'),
  navToggle= document.getElementById('nav-toggle'), 
  navClose= document.getElementById('nav-close')

// menushow
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
// remove mobile menu
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link, we remove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n=>n.addEventListener('click', linkAction))

// // declare function 
// function logger(log) {
//     console.log(log);
// }
// logger( 'hello day la bai hoc dau tien cua toi');

// // --- express function 
// var logger2= function(log){
//     console.log(log)
// }
// logger2("express function")
// //-- express function 
// logger3= (log)=> {
//     console.log(log);
// }
// logger3('arrow function')

// change background header
function scrollHeader() {
        const header= document.getElementById('header')
        console.log('hello')
        // when we scroll is greater than 200viewport innerHeight, add the scrooll header class to the header tag
      if ( this.scrollY >=100) {
         header.classList.add('scroll-header');
      } else {
          header.classList.remove('scroll-header');
      }
   
}   
window.addEventListener('scroll',scrollHeader);

// swiper-slider

var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// video
  const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon= document.getElementById('video-icon')
 function playPause() {
     if (videoFile.paused) {
         videoFile.play()
         videoIcon.classList.add('ri-pause-line')
         videoIcon.classList.remove('ri-play-line')
     
     } else {
         videoFile.pause()
         videoIcon.classList.remove('ri-pause-line')
         videoIcon.classList.add('ri-play-line')
   
     }
 }       
 videoButton.addEventListener('click', playPause)

 function finalVideo() {
     videoIcon.classList.remove('')
     videoIcon.classList.add('ri-play-line')
 }
 videoFile.addEventListener('ended', finalVideo)

 /* scrollup */
 function scrollUp() {
     const scrollUp= document.getElementById('scroll-up');
     if(this.scrollY >= 200 ){
         scrollUp.classList.add('show-scroll')
     }
     else{
         scrollUp.classList.remove('show-scroll')
     }
 }
window.addEventListener('scroll', scrollUp);

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* dark light theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})