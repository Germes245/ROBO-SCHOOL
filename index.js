//const burger_button=document.querySelector('#burger_button');
const swiper = new Swiper('.swiper', {// Navigation arrows
  navigation: {
    nextEl: '#right_button',
    prevEl: '#left_button',
  },

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40, // Отступ между слайдами
  
  scrollbar : {
    el: '.swiper-scrollbar',
    draggable: true,
  }
});

document.querySelectorAll('.more_details').addEventListener('click', (event)=>{
  
});

/*burger_button.addEventListener('click',()=>{
  console.log(burger_button.classList);
  burger_button.classList.toggle('cross');
});*/