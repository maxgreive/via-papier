const dropdownButtons = document.querySelectorAll('.dropdown button')

dropdownButtons.forEach(button => handleDropdown(button))

function handleDropdown(button) {
	button.addEventListener('click', function () {
		this.closest('.dropdown').querySelector('.dropdown-menu').classList.toggle('show')
	})
}