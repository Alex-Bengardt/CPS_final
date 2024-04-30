// Импорт свайпера
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const brands = document.querySelector('.brands__list');
let brandsSwiper;
let maintenanceSwiper;
let pricesSwiper;

// Инициализация свайпера
const swipersHandler = () => {
  if (document.documentElement.clientWidth <= 767 && brands.dataset.mobile === 'false') {

    // Свайпер "Ремонт брендов"
    brandsSwiper = new Swiper('.brands__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 3000,
      },
      speed: 1000,
      pagination: {
        el: '.brands__list-pagination',
        type: 'bullets',
        clickable: true,
      },
      modules: [Navigation, Pagination, Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'brands__wrap',
      slideClass: 'brands__list-item',
      slideActiveClass: 'brands__list-item-active',
      slideNextClass:	'brands__list-item-next',
      slidePrevClass:	'brands__list-item-prev',
      slideVisibleClass: 'brands__list-item-visible',
    });

    // Свайпер "Виды техники"
    maintenanceSwiper = new Swiper('.maintenance__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 3500,
      },
      speed: 1500,
      pagination: {
        el: '.maintenance__list-pagination',
        type: 'bullets',
        clickable: true,
      },
      modules: [Navigation, Pagination, Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'maintenance__wrap',
      slideClass: 'maintenance__list-item',
      slideActiveClass: 'maintenance__list-item-active',
      slideNextClass:	'maintenance__list-item-next',
      slidePrevClass:	'maintenance__list-item-prev',
      slideVisibleClass: 'maintenance__list-item-visible',
    });

    // Свайпер "Цены на услуги"
    pricesSwiper = new Swiper('.prices__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 5000,
      },
      speed: 2000,
      pagination: {
        el: '.prices__list-pagination',
        type: 'bullets',
        clickable: true,
      },
      modules: [Navigation, Pagination, Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'prices__wrap',
      slideClass: 'prices__list-item',
      slideActiveClass: 'prices__list-item-active',
      slideNextClass:	'prices__list-item-next',
      slidePrevClass:	'prices__list-item-prev',
      slideVisibleClass: 'prices__list-item-visible',
    });

    brands.dataset.mobile = 'true';
  }

  if (document.documentElement.clientWidth > 767) {
    brands.dataset.mobile = 'false';

    if (brands.classList.contains('swiper-initialized')) {
      brandsSwiper.destroy();
      maintenanceSwiper.destroy();
      pricesSwiper.destroy();
    }
  }
}

// Первый вызов свайпера, для определения текущего размера страницы
swipersHandler();

// Создаем обработчик событий, который следить за изменениями ширины страницы
window.addEventListener('resize', () => {
  swipersHandler();
})