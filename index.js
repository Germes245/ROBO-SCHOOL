function act_swiper(){
  let slidesPerView=3;
  if(window.innerWidth<1200){
    slidesPerView=2;
  }
  if(window.innerWidth<700){
    slidesPerView=1;
  }
  new Swiper('.swiper', {// Navigation arrows
    navigation: {
      nextEl: '#right_button',
      prevEl: '#left_button',
    },

    direction: 'horizontal',
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 40, // Отступ между слайдами
    
    scrollbar : {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });
};
act_swiper();
window.addEventListener('resize', act_swiper);

/*burger_button.addEventListener('click',()=>{
  console.log(burger_button.classList);
  burger_button.classList.toggle('cross');
});*/