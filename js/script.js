const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
	const menubody = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('active');
		menubody.classList.toggle('active');
	});
}

const swiper = new Swiper('.slider-main-block', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },

});

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;	
	let currentActiveIndex = null;
	if (targetElement.closest('.tabs-deals__button')) {
		tabNavItems.forEach((tabNavItem,index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
})