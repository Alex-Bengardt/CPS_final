// Получаем элемент боковой панели и кнопку, которая ее активирует
const sidebar = document.querySelector('.sidebar');
const sidebarOpenButton = document.querySelector('.icon-list');
// Собираем со страницы все элементы, закрывающие окна
const modalsCloseBtns = Array.from(document.querySelectorAll('.icon-close'));
const modalsCloseBG = Array.from(document.querySelectorAll('.bg-field'));
// Извлекаем первые элементы из двух верхних массивов. Это кнопки для закрытия
// сайдбара. Запихиваем их в новый массив
const sidebarCloseBtns = [modalsCloseBtns.shift(), modalsCloseBG.shift()];
// Собираем со страницы все кнопки, открывающие секции
const btnsShowAll = Array.from(document.querySelectorAll('.show-all'));
// Извлекаем первый элемент из массива. Это кнопка для статьи
const btnReadMore = btnsShowAll.shift();
// Собираем со страницы все слайдеры
const dirWrappers = document.querySelectorAll('.directory-wrap');
const aboutUsArticleWrapper = document.querySelector('.about-company-article__excerpt');
const aboutUsArticle = document.querySelectorAll('.about-company-article__text');
// Собираем со страницы модальные окна и кнопки, которые их активируют
const modalWindowPhoneBtns = document.querySelectorAll('.icon-call');
const modalWindowPhone = document.querySelector('.page__modal-phone');
const modalWindowEmailBtns = document.querySelectorAll('.icon-chat');
const modalWindowEmail = document.querySelector('.page__modal-email');

const modalWindows = [modalWindowPhone, modalWindowEmail];

// Открыть боковое меню
sidebarOpenButton.addEventListener('click', () => {
	sidebar.classList.add('sidebar_active');
})

// Закрыть боковое меню
sidebarCloseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		sidebar.classList.remove('sidebar_active');
	});
})

// Кнопки "Читать далее" и "Показать все"
btnsShowAll.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		if (btnsShowAll[idx].textContent === "Скрыть") {
			// Обнуляем стили элемента, меняем текст кнопки на исходный
			dirWrappers[idx].removeAttribute("style");
			btnsShowAll[idx].textContent = "Показать всe";
			btnsShowAll[idx].classList.remove('show-all_expanded');
		} else {
			// Разворачиваем враппер на всю высоту содержимого, меняем текст кнопки и
			// добавляем класс, который переворачивает декоративный элемент
			dirWrappers[idx].style.maxHeight = dirWrappers[idx].scrollHeight +'px';
			btnsShowAll[idx].textContent = "Скрыть";
			btnsShowAll[idx].classList.add('show-all_expanded');
		}
	});
})

btnReadMore.addEventListener('click', () => {
	aboutUsArticle.forEach((text) => {
		if (btnReadMore.textContent === "Скрыть") {
			aboutUsArticleWrapper.removeAttribute("style");
			text.classList.remove('about-company-article__text_expanded');
		} else {
			aboutUsArticleWrapper.style.maxHeight = aboutUsArticleWrapper.scrollHeight + 40 +'px';
			text.classList.add('about-company-article__text_expanded');
		}
	})

	if (btnReadMore.textContent === "Скрыть") {
		btnReadMore.textContent = "Показать всe";
		btnReadMore.classList.remove('show-all_expanded');
	} else {
		btnReadMore.textContent = "Скрыть";
		btnReadMore.classList.add('show-all_expanded');
	}
})

// Модальные окна
// Каждой кнопке .icon-call задаем слушатель события
modalWindowPhoneBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		sidebar.classList?.remove('sidebar_active');
		modalWindowPhone.classList.add('modal_showed');
	});
})

// Каждой кнопке .icon-chat задаем слушатель события
modalWindowEmailBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		sidebar.classList?.remove('sidebar_active');
		modalWindowEmail.classList.add('modal_showed');
	});
})

// Для на каждую кнопку закрывающую свое модальное окно вешаем слушатель события
// Благодяря тому, что мы собрали модальные окна в массив, мы может соотнести их
// по индексам с коллекцией кнопок
modalsCloseBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		sidebar.classList?.remove('sidebar_active');
		modalWindows[idx].classList.remove('modal_showed');
	});
})

modalsCloseBG.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		sidebar.classList?.remove('sidebar_active');
		modalWindows[idx].classList.remove('modal_showed');
	});
})

// Вешаем слушатель события на кнопку ESC, при нажатии на которую будут
// закрываться любые открытые окна
function hideElementOnEscape(event) {
	if (event.keyCode === 27) {
		sidebar.classList?.remove('sidebar_active');
		modalWindowPhone.classList?.remove('modal_showed');
		modalWindowEmail.classList?.remove('modal_showed');
	}
}

window.addEventListener('keydown', hideElementOnEscape);
