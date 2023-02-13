window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY >0)
})

// contact btn//
/*const textButtons = document .querySelectorAll( '.contact__btn');
textButtons .forEach(textButton => {
    let text = textButton.querySelector (' p ');
    text.innerHTML = text.innerHTML.split(' ').map((character, index) => `<span style = "transform: rotate(${ index * 12} deg)">${ character }</span>` ).join(' ')
})//*/
const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

//swipper js/////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });

  
/*/var swiper = new Swipper(" .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: " .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});*/

/*const nav = document .querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display= 'flex';
}
openNavBtn .addEventListener ('click' , openNav);*/

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    
    nav.style.display = 'flex' ;
    openNavBtn.style.display = 'none' ;
    closeNavBtn.style.display = 'inline-block' ;

}
    openNavBtn.addEventListener('click', openNav) ;

const closeNav = () => {
    
    nav.style.display = 'none' ;
    openNavBtn.style.display = 'inline-block' ;
    closeNavBtn.style.display = 'none' ;

}
    closeNavBtn.addEventListener('click', closeNav) ;


/*const closeNav = () => {
    nav.syle.display = 'none' ;
    openNavBtn.style.display = 'inline-block' ;
    closeNavBtn.style.display = 'none' ;

}
openNavBtn.addEventListener('click', closeNav) ;
nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click' , closeNav);
})*/


if( document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click' , closeNav);
    })

}