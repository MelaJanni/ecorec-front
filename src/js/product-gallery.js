document.addEventListener('DOMContentLoaded', () => {
  initSwipers();
  setupZoomFunctionality();
});

function initSwipers() {
  const thumbsSwiper = new Swiper('.thumbs-swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
      992: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
      }
    }
  });

  const mainSwiper = new Swiper('.main-swiper', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: false,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
  
  const relatedProductsSwiper = new Swiper('.related-products-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: false,
    pagination: false,
    navigation: {
      nextEl: '.container-buttons-related .swiper-button-next',
      prevEl: '.container-buttons-related .swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        navigation: {
          enabled: true
        }
      }
    }
  });
}

function setupZoomFunctionality() {
  const zoomModal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  const closeZoom = document.querySelector('.zoom-modal-close');
  const zoomButton = document.querySelector('.zoom-btn');
  
  function showZoomModal(imgSrc) {
    zoomedImage.src = imgSrc;
    zoomModal.style.display = 'flex';
  }
  
  if (zoomButton) {
    zoomButton.addEventListener('click', () => {
      const activeSlide = document.querySelector('.main-swiper .swiper-slide-active img');
      if (activeSlide) {
        showZoomModal(activeSlide.src);
      }
    });
  }
  
  const mainSwiperSlides = document.querySelectorAll('.main-swiper .swiper-slide img');
  mainSwiperSlides.forEach(slide => {
    slide.addEventListener('click', () => {
      showZoomModal(slide.src);
    });
  });
  
  if (closeZoom) {
    closeZoom.addEventListener('click', () => {
      zoomModal.style.display = 'none';
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
      zoomModal.style.display = 'none';
    }
  });
}

const relatedProducts = document.querySelector('.related-products-container');
if (relatedProducts) {
} 