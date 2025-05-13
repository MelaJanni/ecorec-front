document.addEventListener('DOMContentLoaded', () => {
  // Inicialización del Swiper principal y miniaturas
  const thumbsSwiper = new Swiper('.thumbsSwiper', {
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

  const mainSwiper = new Swiper('.mainSwiper', {
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
  
  // Inicialización del Swiper de productos relacionados
  const relatedProductsSwiper = new Swiper('.relatedProductsSwiper', {
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
      // cuando el ancho de la ventana es >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // cuando el ancho de la ventana es >= 768px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      // cuando el ancho de la ventana es >= 992px (lg en Bootstrap)
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

  // Funcionalidad de zoom
  const zoomModal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  const closeZoom = document.querySelector('.zoom-modal-close');
  const zoomButton = document.querySelector('.zoom-btn');

  // Función para mostrar la imagen en el modal
  function showZoomModal(imgSrc) {
    zoomedImage.src = imgSrc;
    zoomModal.style.display = 'flex';
  }

  // Añadir evento al botón de zoom
  if (zoomButton) {
    zoomButton.addEventListener('click', () => {
      const activeSlide = document.querySelector('.mainSwiper .swiper-slide-active img');
      if (activeSlide) {
        showZoomModal(activeSlide.src);
      }
    });
  }

  // Configurar las imágenes del swiper principal para zoom al hacer clic
  const mainSwiperSlides = document.querySelectorAll('.mainSwiper .swiper-slide img');
  mainSwiperSlides.forEach(slide => {
    slide.addEventListener('click', () => {
      showZoomModal(slide.src);
    });
  });

  // Cerrar el modal de zoom
  if (closeZoom) {
    closeZoom.addEventListener('click', () => {
      zoomModal.style.display = 'none';
    });
  }

  // Cerrar el modal haciendo clic fuera de la imagen
  window.addEventListener('click', (e) => {
    if (e.target === zoomModal) {
      zoomModal.style.display = 'none';
    }
  });

  // Productos relacionados - hacer scrolleable horizontalmente en móvil
  const relatedProducts = document.querySelector('.related-products-container');
  if (relatedProducts) {
    // El contenedor ya tiene las clases necesarias para scrollear horizontalmente
    // Las clases flex-nowrap y overflow-auto ya permiten esta funcionalidad
  }
}); 