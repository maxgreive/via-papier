const dropdownButtons = document.querySelectorAll('.dropdown button')

dropdownButtons.forEach(button => handleDropdown(button))

function handleDropdown(button) {
	button.addEventListener('click', function () {
		this.closest('.dropdown').querySelector('.dropdown-menu').classList.toggle('show')
	})
}

function closeDropdowns() {
	const dropdownMenus = document.querySelectorAll('.dropdown-menu')
	dropdownMenus.forEach(menu => menu.classList.remove('show'))
}

document.addEventListener('click', function(event) {
	const isOutside = !event.target.closest('.dropdown');
	if (isOutside) {
		closeDropdowns();
	}
});

window.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		closeDropdowns();
	}
});


const gallery = document.querySelector('.main-carousel');
const flkty = new Flickity(gallery, {
  autoPlay: true,
  fullscreen: true,
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  percentPosition: false,
});

function handleScrollerClick(event) {
	event.preventDefault();
	document.querySelector(event.target.dataset.target).scrollIntoView({ behavior: 'smooth' });
}

 const selScrollers = document.querySelectorAll('.scroller');
 selScrollers.forEach(scroller => {
	scroller.addEventListener('click', function(event) {
	  handleScrollerClick(event);
	});
 });