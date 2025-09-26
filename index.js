const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        320: {
            slidesPerView: 1,
            navigation: false
        },
        700: {
            slidesPerView: 2,
            navigation: {
                nextEl: '#right_button',
                prevEl: '#left_button',
            }
        },
        1200: {
            slidesPerView: 3,
            navigation: {
                nextEl: '#right_button',
                prevEl: '#left_button',
            }
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    }
});

// Удаляем старую функцию act_swiper и обработчик resize
// Swiper сам handleит изменения через breakpoints

document.getElementById('burger-checkbox').addEventListener('change', function() {
  if (this.checked) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const modalCheckbox = document.getElementById('for_swiper');
    
    modalCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    });
});