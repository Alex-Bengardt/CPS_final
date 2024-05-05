(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/index.html */ "./index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/js/swiper.js */ "./js/swiper.js");
/* harmony import */ var _js_listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/js/listeners.js */ "./js/listeners.js");
/* harmony import */ var _js_listeners_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_listeners_js__WEBPACK_IMPORTED_MODULE_3__);
// Импорты





/***/ }),

/***/ "./js/listeners.js":
/*!*************************!*\
  !*** ./js/listeners.js ***!
  \*************************/
/***/ (() => {

// Получаем элемент боковой панели и кнопку, которая ее активирует
var sidebar = document.querySelector('.sidebar');
var sidebarOpenButton = document.querySelector('.icon_list');
// Собираем со страницы все элементы, закрывающие окна
var modalsCloseBtns = Array.from(document.querySelectorAll('.icon_close'));
var modalsCloseBG = Array.from(document.querySelectorAll('.bg-field'));
// Извлекаем первые элементы из двух верхних массивов. Это кнопки для закрытия
// сайдбара. Запихиваем их в новый массив
var sidebarCloseBtns = [modalsCloseBtns.shift(), modalsCloseBG.shift()];
// Собираем со страницы все кнопки, открывающие секции
var btnsShowAll = Array.from(document.querySelectorAll('.show-all'));
// Извлекаем первый элемент из массива. Это кнопка для статьи
var btnReadMore = btnsShowAll.shift();
// Собираем со страницы все слайдеры
var dirWrappers = document.querySelectorAll('.directory-wrap');
var aboutUsArticleWrapper = document.querySelector('.about-company-article__excerpt');
var aboutUsArticle = document.querySelectorAll('.about-company-article__text');
// Собираем со страницы модальные окна и кнопки, которые их активируют
var modalWindowPhoneBtns = document.querySelectorAll('.icon_call');
var modalWindowPhone = document.querySelector('.page__modal-phone');
var modalWindowEmailBtns = document.querySelectorAll('.icon_chat');
var modalWindowEmail = document.querySelector('.page__modal-email');
var modalWindows = [modalWindowPhone, modalWindowEmail];

// Открыть боковое меню
sidebarOpenButton.addEventListener('click', function () {
  sidebar.classList.add('sidebar_active');
});

// Закрыть боковое меню
sidebarCloseBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    sidebar.classList.remove('sidebar_active');
  });
});

// Кнопки "Читать далее" и "Показать все"
btnsShowAll.forEach(function (btn, idx) {
  btn.addEventListener('click', function () {
    if (btnsShowAll[idx].textContent === "Скрыть") {
      // Обнуляем стили элемента, меняем текст кнопки на исходный
      dirWrappers[idx].removeAttribute("style");
      btnsShowAll[idx].textContent = "Показать всe";
      btnsShowAll[idx].classList.remove('show-all_expanded');
    } else {
      // Разворачиваем враппер на всю высоту содержимого, меняем текст кнопки и
      // добавляем класс, который переворачивает декоративный элемент
      dirWrappers[idx].style.maxHeight = dirWrappers[idx].scrollHeight + 'px';
      btnsShowAll[idx].textContent = "Скрыть";
      btnsShowAll[idx].classList.add('show-all_expanded');
    }
  });
});
btnReadMore.addEventListener('click', function () {
  aboutUsArticle.forEach(function (text) {
    if (btnReadMore.textContent === "Скрыть") {
      aboutUsArticleWrapper.removeAttribute("style");
      text.classList.remove('about-company-article__text_expanded');
    } else {
      aboutUsArticleWrapper.style.maxHeight = aboutUsArticleWrapper.scrollHeight + 40 + 'px';
      text.classList.add('about-company-article__text_expanded');
    }
  });
  if (btnReadMore.textContent === "Скрыть") {
    btnReadMore.textContent = "Показать всe";
    btnReadMore.classList.remove('show-all_expanded');
  } else {
    btnReadMore.textContent = "Скрыть";
    btnReadMore.classList.add('show-all_expanded');
  }
});

// Модальные окна
// Каждой кнопке .icon-call задаем слушатель события
modalWindowPhoneBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var _sidebar$classList;
    (_sidebar$classList = sidebar.classList) === null || _sidebar$classList === void 0 ? void 0 : _sidebar$classList.remove('sidebar_active');
    modalWindowPhone.classList.add('modal_showed');
  });
});

// Каждой кнопке .icon-chat задаем слушатель события
modalWindowEmailBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var _sidebar$classList2;
    (_sidebar$classList2 = sidebar.classList) === null || _sidebar$classList2 === void 0 ? void 0 : _sidebar$classList2.remove('sidebar_active');
    modalWindowEmail.classList.add('modal_showed');
  });
});

// Для на каждую кнопку закрывающую свое модальное окно вешаем слушатель события
// Благодяря тому, что мы собрали модальные окна в массив, мы может соотнести их
// по индексам с коллекцией кнопок
modalsCloseBtns.forEach(function (btn, idx) {
  btn.addEventListener('click', function () {
    var _sidebar$classList3;
    (_sidebar$classList3 = sidebar.classList) === null || _sidebar$classList3 === void 0 ? void 0 : _sidebar$classList3.remove('sidebar_active');
    modalWindows[idx].classList.remove('modal_showed');
  });
});
modalsCloseBG.forEach(function (btn, idx) {
  btn.addEventListener('click', function () {
    var _sidebar$classList4;
    (_sidebar$classList4 = sidebar.classList) === null || _sidebar$classList4 === void 0 ? void 0 : _sidebar$classList4.remove('sidebar_active');
    modalWindows[idx].classList.remove('modal_showed');
  });
});

// Вешаем слушатель события на кнопку ESC, при нажатии на которую будут
// закрываться любые открытые окна
function hideElementOnEscape(event) {
  if (event.keyCode === 27) {
    var _sidebar$classList5, _modalWindowPhone$cla, _modalWindowEmail$cla;
    (_sidebar$classList5 = sidebar.classList) === null || _sidebar$classList5 === void 0 ? void 0 : _sidebar$classList5.remove('sidebar_active');
    (_modalWindowPhone$cla = modalWindowPhone.classList) === null || _modalWindowPhone$cla === void 0 ? void 0 : _modalWindowPhone$cla.remove('modal_showed');
    (_modalWindowEmail$cla = modalWindowEmail.classList) === null || _modalWindowEmail$cla === void 0 ? void 0 : _modalWindowEmail$cla.remove('modal_showed');
  }
}
window.addEventListener('keydown', hideElementOnEscape);

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
// Импорт свайпера

var brands = document.querySelector('.brand__list');
var brandsSwiper;
var maintenanceSwiper;
var pricesSwiper;

// Инициализация свайпера
var swipersHandler = function swipersHandler() {
  if (document.documentElement.clientWidth <= 767 && brands.dataset.mobile === 'false') {
    // Свайпер "Ремонт брендов"
    brandsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.brand__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 3000
      },
      speed: 1000,
      pagination: {
        el: '.brand__list-pagination',
        type: 'bullets',
        clickable: true
      },
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'brands__wrap',
      slideClass: 'brand__list-item',
      slideActiveClass: 'brand__list-item-active',
      slideNextClass: 'brand__list-item-next',
      slidePrevClass: 'brand__list-item-prev',
      slideVisibleClass: 'brand__list-item-visible'
    });

    // Свайпер "Виды техники"
    maintenanceSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.maintenance__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 3500
      },
      speed: 1500,
      pagination: {
        el: '.maintenance__list-pagination',
        type: 'bullets',
        clickable: true
      },
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'maintenance__wrap',
      slideClass: 'maintenance__list-item',
      slideActiveClass: 'maintenance__list-item-active',
      slideNextClass: 'maintenance__list-item-next',
      slidePrevClass: 'maintenance__list-item-prev',
      slideVisibleClass: 'maintenance__list-item-visible'
    });

    // Свайпер "Цены на услуги"
    pricesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.prices__list', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 5000
      },
      speed: 2000,
      pagination: {
        el: '.prices__list-pagination',
        type: 'bullets',
        clickable: true
      },
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
      // Классы слайдера по БЭМ
      wrapperClass: 'prices__wrap',
      slideClass: 'prices__list-item',
      slideActiveClass: 'prices__list-item-active',
      slideNextClass: 'prices__list-item-next',
      slidePrevClass: 'prices__list-item-prev',
      slideVisibleClass: 'prices__list-item-visible'
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
};

// Первый вызов свайпера, для определения текущего размера страницы
swipersHandler();

// Создаем обработчик событий, который следить за изменениями ширины страницы
window.addEventListener('resize', function () {
  swipersHandler();
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/company.png */ "./img/company.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_lenovo.png */ "./img/brands/brand_lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_samsung.png */ "./img/brands/brand_samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_apple.png */ "./img/brands/brand_apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_viewsonic.png */ "./img/brands/brand_viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_bosch.png */ "./img/brands/brand_bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_hp.png */ "./img/brands/brand_hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_acer.png */ "./img/brands/brand_acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../img/brands/brand_sony.png */ "./img/brands/brand_sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n\t<head>\r\n\t\t<meta charset=\"UTF-8\" />\r\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n\t\t<title>Сервисный центр \"CPS\"</title>\r\n\t</head>\r\n\r\n\t<body class=\"background\">\r\n\t\t<div class=\"page\">\r\n\r\n\t\t\t<aside class=\"sidebar\">\r\n\t\t\t\t<div class=\"bg-field\"></div>\r\n\r\n\t\t\t\t<div class=\"sidebar__content modal-window-box\">\r\n\t\t\t\t\t<div class=\"box\">\r\n\t\t\t\t\t\t<button class=\"icon icon_close\"></button>\r\n\t\t\t\t\t\t<a class=\"logo\" href=\"#\"></a>\r\n\t\t\t\t\t\t<button class=\"icon icon_search\"></button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<nav class=\"aside-nav\">\r\n\t\t\t\t\t\t<ul class=\"aside-nav__list\">\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Ремонт техники</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Услуги и сервисы</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Корпоративным клиентам</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Продавцам техники</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Партнерам</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Производителям</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Наши сервисные центры</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"aside-nav__item\">\r\n\t\t\t\t\t\t\t\t<a class=\"aside-nav__link\" href=\"#\">Контакты</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\r\n\t\t\t\t\t<div class=\"box\">\r\n\t\t\t\t\t\t<div class=\"box__btns-list\">\r\n\t\t\t\t\t\t\t<button class=\"icon icon_call\"></button>\r\n\t\t\t\t\t\t\t<button class=\"icon icon_chat\"></button>\r\n\t\t\t\t\t\t\t<button class=\"icon icon_profile\"></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<a class=\"box__link-email\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n\t\t\t\t\t\t<a class=\"box__link-phone headline\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form class=\"lang-widget\" action=\"\">\r\n\t\t\t\t\t\t<input id=\"RU\" class=\"lang-widget__btn\" type=\"radio\" name=\"select-language\" checked>\r\n\t\t\t\t\t\t<label for=\"RU\" class=\"lang-widget__list-item\">RU</label>\r\n\r\n\t\t\t\t\t\t<input id=\"EN\" class=\"lang-widget__btn\" type=\"radio\" name=\"select-language\">\r\n\t\t\t\t\t\t<label for=\"EN\" class=\"lang-widget__list-item\">EN</label>\r\n\r\n\t\t\t\t\t\t<input id=\"CH\" class=\"lang-widget__btn\" type=\"radio\" name=\"select-language\">\r\n\t\t\t\t\t\t<label for=\"CH\" class=\"lang-widget__list-item\">CH</label>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</aside>\r\n\r\n\t\t\t<section class=\"page__modal-phone modal\">\r\n\t\t\t\t<div class=\"bg-field\"></div>\r\n\r\n\t\t\t\t<div class=\"modal-window-box\">\r\n\t\t\t\t\t<div class=\"modal__header\">\r\n\t\t\t\t\t\t<h2 class=\"modal__title headline\">Заказать звонок</h2>\r\n\t\t\t\t\t\t<button class=\"icon icon_close\" type=\"button\"></button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form class=\"form\" action=\"\">\r\n\t\t\t\t\t\t<input class=\"form__input\" type=\"tel\" placeholder=\"Телефон\" required>\r\n\t\t\t\t\t\t<p class=\"form__desc\">Нажимая “отправить”, вы даете согласие на\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"form__decs-link\">обработку персональных данных</a>\r\n\t\t\t\t\t\t\tи соглашаетесь с нашей\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"form__decs-link\">политикой конфиденциальности</a>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button class=\"wide-btn\" type=\"submit\">\r\n\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Отправить</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\r\n\t\t\t<section class=\"page__modal-email modal\">\r\n\t\t\t\t<div class=\"bg-field\"></div>\r\n\r\n\t\t\t\t<div class=\"modal-window-box\">\r\n\t\t\t\t\t<div class=\"modal__header\">\r\n\t\t\t\t\t\t<h2 class=\"modal__title headline\">Обратная связь</h2>\r\n\t\t\t\t\t\t<button class=\"icon icon_close\" type=\"button\"></button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form class=\"form\" action=\"\">\r\n\t\t\t\t\t\t<input class=\"form__input\" type=\"text\" placeholder=\"Имя\" required>\r\n\t\t\t\t\t\t<input class=\"form__input\" type=\"tel\" placeholder=\"Телефон\">\r\n\t\t\t\t\t\t<input class=\"form__input\" type=\"email\" placeholder=\"Электронная почта\" required>\r\n\t\t\t\t\t\t<textarea class=\"form__input\" type=\"textarea\" rows=\"6\" placeholder=\"Сообщение\" required></textarea>\r\n\t\t\t\t\t\t<p class=\"form__desc\">Нажимая “отправить”, вы даете согласие на\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"form__decs-link\">обработку персональных данных</a>\r\n\t\t\t\t\t\t\tи соглашаетесь с нашей\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"form__decs-link\">политикой конфиденциальности</a>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button class=\"wide-btn\" type=\"submit\">\r\n\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Отправить</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</section>\r\n\r\n\t\t\t<div class=\"page__content\">\r\n\r\n\t\t\t\t<header class=\"header\">\r\n\t\t\t\t\t<div class=\"header__menu\">\r\n\t\t\t\t\t\t<div class=\"header__elements-list\">\r\n\t\t\t\t\t\t\t<button class=\"icon icon_list\"></button>\r\n\t\t\t\t\t\t\t<div class=\"header__logo-box\">\r\n\t\t\t\t\t\t\t\t<a class=\"logo\" href=\"#\"></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"header__right-list\">\r\n\t\t\t\t\t\t\t<div class=\"header__elements-list addon-list\">\r\n\t\t\t\t\t\t\t\t<button class=\"icon icon_call\"></button>\r\n\t\t\t\t\t\t\t\t<button class=\"icon icon_chat\"></button>\r\n\t\t\t\t\t\t\t\t<button class=\"icon icon_profile\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"header__elements-list corner-list\">\r\n\t\t\t\t\t\t\t\t<div class=\"header__label-box\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"repair\" class=\"header__label\">Оставить заявку</label>\r\n\t\t\t\t\t\t\t\t\t<button id=\"repair\" class=\"icon icon_repair\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"header__label-box\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"status\" class=\"header__label\">Статус ремонта</label>\r\n\t\t\t\t\t\t\t\t\t<button id=\"status\" class=\"icon icon_status\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<h1 class=\"header__title headline\">Услуги и сервисы</h1>\r\n\t\t\t\t</header>\r\n\r\n\t\t\t\t<main class=\"main\">\r\n\t\t\t\t\t<section class=\"our-service\">\r\n\t\t\t\t\t\t<nav class=\"our-service__service-nav\">\r\n\t\t\t\t\t\t\t<ul class=\"our-service__list service-list\">\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Ремонтируемые устройства</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Дополнительные услуги</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Цены на услуги</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Адреса сервисных центров</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Специальные цены</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"service-list__item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"service-list__link\" href=\"#\">Отзывы</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</nav>\r\n\r\n\t\t\t\t\t\t<article class=\"our-service__about-company about-company-article\">\r\n\t\t\t\t\t\t\t<div class=\"about-company-article__excerpt\">\r\n\t\t\t\t\t\t\t\t<p class=\"about-company-article__text\">Мы являемся авторизованным сервисным центром по ремонту техники\r\n\t\t\t\t\t\t\t\t\tDell. Только у нас вы можете отремонтировать свой ноутбук Dell с\r\n\t\t\t\t\t\t\t\t\tофициальной гарантией производителя.</p>\r\n\t\t\t\t\t\t\t\t<p class=\"about-company-article__text\">Мы успешно работаем с 1992 года и заслужили репутацию надежного\r\n\t\t\t\t\t\t\t\t\tпартнера<span class=\"about-company-article__text\">, что подтверждает большое количество постоянных\r\n\t\t\t\t\t\t\t\t\t\tклиентов. Мы\r\n\t\t\t\t\t\t\t\t\t\tгордимся тем, что к нам обращаются по рекомендациям и, в свою\r\n\t\t\t\t\t\t\t\t\t\tочередь, советуют нас родным и близким.</span></p>\r\n\t\t\t\t\t\t\t\t<button class=\"about-company-article__read-more show-all\" type=\"button\">Читать далее</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<img class=\"about-company-article__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"our-office\">\r\n\t\t\t\t\t\t</article>\r\n\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t<section class=\"brand\">\r\n\t\t\t\t\t\t<h2 class=\"subtitle\">Ремонт техники различных брендов</h2>\r\n\r\n\t\t\t\t\t\t<div class=\"brand__list directory\" data-mobile=\"false\">\r\n\t\t\t\t\t\t\t<div class=\"brands__wrap directory-wrap\">\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item brand__list item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"lenovo\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"samsung\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"apple\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"viewsonic\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"bosch\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"hp\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"acer\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"sony\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"asus\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"gigabyte\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"lg\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"msi\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"panasonic\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"compaq\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"brand__list-item item-list\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"brand__item-logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"packardbell\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"brand__list-pagination pagination\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button class=\"show-all\">Показать все</button>\r\n\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t<section class=\"maintenance\">\r\n\t\t\t\t\t\t<h2 class=\"subtitle\">Ремонт различных видов техники</h2>\r\n\t\t\t\t\t\t<div class=\"maintenance__list directory\">\r\n\t\t\t\t\t\t\t<div class=\"maintenance__wrap directory-wrap\">\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт ноутбуков\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт планшетов\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт ПК\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт мониторов\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт ноутбуков\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт планшетов\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт ПК\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"maintenance__list-item handling item-list\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"handling__subject\">Ремонт мониторов\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"round-btn\" type=\"button\"></button>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"maintenance__list-pagination pagination\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button class=\"show-all\">Показать все</button>\r\n\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t<section class=\"prices\">\r\n\t\t\t\t\t\t<h2 class=\"subtitle\">Цены на услуги</h2>\r\n\t\t\t\t\t\t<div class=\"prices__list directory\">\r\n\t\t\t\t\t\t\t<ul class=\"prices__wrap directory-wrap\">\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms caption-terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">30 мин</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"terms__order wide-btn\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Заказать</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Замена дисплея</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">1 000 &#8381;</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">30 &ndash; 120 мин</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"terms__order wide-btn\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Заказать</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Замена полифонического динамика</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">1 000 &#8381;</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">30 &ndash; 120 мин</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"terms__order wide-btn\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Заказать</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Тестирование с выдачей технического заключения</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">1 000 &#8381;</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">30 &ndash; 120 мин</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"terms__order wide-btn\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Заказать</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"prices__list-item terms item-list\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Ремонтные услуги</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">Замена программного обеспечения</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Цена</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">1 000 &#8381;</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"terms__component\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"terms__desc alt-text\">Срок</h3>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"terms__text\">30 &ndash; 120 мин</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"terms__order wide-btn\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"wide-btn__text\">Заказать</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<div class=\"prices__list-pagination pagination\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class=\"prices__terms-awareness\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную\r\n\t\t\t\t\t\t\tуслугу.\r\n\t\t\t\t\t\t\tДля получения коммерческого\r\n\t\t\t\t\t\t\tпредложения на постоянное обслуживание, оставьте заявку.</p>\r\n\t\t\t\t\t\t<button class=\"prices__commercial\">\r\n\t\t\t\t\t\t\tПолучить коммерческое предложение<span></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t</main>\r\n\r\n\t\t\t\t<footer class=\"footer\">\r\n\t\t\t\t\t<ul class=\"about-us\">\r\n\t\t\t\t\t\t<li class=\"about-us__copyright\">\r\n\t\t\t\t\t\t\t<p class=\"alt-text\">&copy; 2019 CPS</p>\r\n\t\t\t\t\t\t\t<p class=\"alt-text\">Разработано командой Apesong</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"about-us__privacy-policy\">\r\n\t\t\t\t\t\t\t<a class=\"alt-text\" href=\"#\">Политика конфиденциальности</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"about-us__warn-public-offer\">\r\n\t\t\t\t\t\t\t<p class=\"alt-text\">Информация, размещенная на данной странице, не является\r\n\t\t\t\t\t\t\t\tпубличной офертой</p>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</footer>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/brands/brand_acer.png":
/*!***********************************!*\
  !*** ./img/brands/brand_acer.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/5fb79dd12e637d7a00e0.png";

/***/ }),

/***/ "./img/brands/brand_apple.png":
/*!************************************!*\
  !*** ./img/brands/brand_apple.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/5270dcf57ec8505c9437.png";

/***/ }),

/***/ "./img/brands/brand_bosch.png":
/*!************************************!*\
  !*** ./img/brands/brand_bosch.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/08281b1fc0ca8c439553.png";

/***/ }),

/***/ "./img/brands/brand_hp.png":
/*!*********************************!*\
  !*** ./img/brands/brand_hp.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/2832a3df08ed2720eb9c.png";

/***/ }),

/***/ "./img/brands/brand_lenovo.png":
/*!*************************************!*\
  !*** ./img/brands/brand_lenovo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/e8c36525616bebe1d6b7.png";

/***/ }),

/***/ "./img/brands/brand_samsung.png":
/*!**************************************!*\
  !*** ./img/brands/brand_samsung.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/e89ef4247639a893c990.png";

/***/ }),

/***/ "./img/brands/brand_sony.png":
/*!***********************************!*\
  !*** ./img/brands/brand_sony.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/eb9729d7de8e143c38c5.png";

/***/ }),

/***/ "./img/brands/brand_viewsonic.png":
/*!****************************************!*\
  !*** ./img/brands/brand_viewsonic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/08ddf17a22e78ac09427.png";

/***/ }),

/***/ "./img/company.png":
/*!*************************!*\
  !*** ./img/company.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/6385c5505adfdfab3885.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_swiper_swiper_esm_js"], () => (__webpack_exec__("./js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.0d4fdc89f3b945d7de10.js.map