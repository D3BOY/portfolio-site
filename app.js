const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var typed = new Typed(".typing", {
	strings: ["Website Developer", "Frontend Developer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

$(document).ready(function(){
	$(window).scroll(function(){
	// scroll-up button show/hide script
	if(this.scrollY > 500){
		$('.scroll-up-btn').addClass("show");
	}else{
		$('.scroll-up-btn').removeClass("show");
	}
    });

	// slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
		// removing smooth scroll on slide-up button click
		$('html').css("scrollBehavior", "auto");
	});
});

