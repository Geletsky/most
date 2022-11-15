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

if (mySliderAllSlides) {
	mySliderAllSlides.innerHTML = swiper.slides.length - 2;
}



swiper.on('slideChange', function () {
	let currentSlide = ++swiper.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});

const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},

	navigation: {
		nextEl: '.slider-interior-button-next',
		prevEl: '.slider-interior-button-prev'
	},
});

const swiper3 = new Swiper('.swiper3', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	slidesPerView: 1,

	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	breakpoints: {
		1100: {
			slidesPerView: 4,

		},
		850: {
			slidesPerView: 3,

		},
		600: {
			slidesPerView: 2,

		},
	}
});

const swiper4 = new Swiper('.swiper4', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	slidesPerView: 1,

	autoplay: {
		delay: 2000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	breakpoints: {
		1100: {
			slidesPerView: 4,

		},
		850: {
			slidesPerView: 3,

		},
		600: {
			slidesPerView: 2,

		},
	}
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		const menuBodyActive = document.querySelector('.menu__body._active');
		if (menuBodyActive) {
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
			document.body.classList.remove('_lock');
		}
		event.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

window.onscroll = function showHeader() {
	const header = document.querySelector('.header');

	if(window.pageYOffset > 200) {
		header.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
	};
};



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