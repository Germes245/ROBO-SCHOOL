const swiper=new Swiper('.swiper', {// Navigation arrows
    direction: 'horizontal',
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 40, // Отступ между слайдами
    
    scrollbar : {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });
function act_swiper(){
  if(window.innerWidth<700){
    swiper.slidesPerView=1
  }
  else if(window.innerWidth<1200){
    swiper.navigation = {nextEl: '#right_button',prevEl: '#left_button'};
    swiper.slidesPerView=2;
  }
  else {
    swiper.navigation = {nextEl: '#right_button',prevEl: '#left_button'};
    swiper.slidesPerView=3;
  }
};
act_swiper();
window.addEventListener('resize', act_swiper);
document.getElementById('burger-checkbox').addEventListener('change', function() {
  if (this.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});