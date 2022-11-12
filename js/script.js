const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener("click", function (e) {
	document.body.classList.toggle('_lock');
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	autoplay: {
		delay: 3000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let mySliderAllSlides = document.querySelector('.slider-restaurant__total');
console.log(mySliderAllSlides)
let mySliderCurrentSlide = document.querySelector('.slider-restaurant__curent');

mySliderAllSlides.innerHTML = swiper.slides.length - 2;


swiper.on('slideChange', function () {
	let currentSlide = ++swiper.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});



// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	direction: 'vertical'
// });
// const swiper2 = new Swiper('.swiper2', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	slidesPerView: 1,
// 	spaceBetween: 0,


// 	navigation: {
// 		nextEl: '.slider-news-button-next',
// 		prevEl: '.slider-news-button-prev'
// 	},
// 	breakpoints: {
// 		1087: {
// 			slidesPerView: 4,
// 			centeredSlides: false,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 			centeredSlides: false,
// 			spaceBetween: 0,
// 		},
// 		590: {
// 			slidesPerView: 2,
// 			centeredSlides: false,
// 			spaceBetween: 40,
// 		},
// 		410: {
// 			slidesPerView: 1,
// 			spaceBetween: -100,
// 		}
// 	},


// });

// const swiper3 = new Swiper('.swiper3', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	slidesPerView: 1,
// 	spaceBetween: 0,


// 	navigation: {
// 		nextEl: '.slider-news-button-next',
// 		prevEl: '.slider-news-button-prev'
// 	},
// 	breakpoints: {
// 		1087: {
// 			slidesPerView: 4,
// 			centeredSlides: false,
// 		},
// 		992: {
// 			slidesPerView: 3,
// 			centeredSlides: false,
// 			spaceBetween: 0,
// 		},
// 		590: {
// 			slidesPerView: 2,
// 			centeredSlides: false,
// 			spaceBetween: 40,
// 		},
// 		410: {
// 			slidesPerView: 1,
// 			spaceBetween: -100,
// 		}
// 	},


// });