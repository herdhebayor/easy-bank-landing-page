/** @format */

const iconOpen = document.querySelector('.icon-open')
const hamburger = document.querySelector('.hamburger-container')
const iconClose = document.querySelector('.icon-close')
const html = document.documentElement

function OpenHamburger() {
	hamburger.style.transform = 'scaleY(1)'
	iconClose.style.display = 'block'
	iconOpen.style.display = 'none'
}
function closeHamburger() {
	hamburger.style.transform = 'scaleY(0)'
	iconClose.style.display = 'none'
	iconOpen.style.display = 'block'
	html.removeEventListener(CloseHamburgerOnBodyClick)
}
iconOpen.addEventListener('click', OpenHamburger)

iconClose.addEventListener('click', closeHamburger)

