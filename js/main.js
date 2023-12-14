// Burger

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function() {
	nav.classList.toggle("nav--active");
	burger.classList.toggle("burger--active");
	document.body.classList.toggle("stop-scroll")
})

// Modal

const modal = document.getElementById("modal-parent");
const callButton = document.getElementById("header__btn");

// Modal open
callButton.addEventListener("click", function(){
	modal.classList.add("modal-parent--active");
	document.body.classList.add("stop-scroll");
});

// Modal close
modal.querySelector(".modal").addEventListener("click", function(event){
	event._isClick = true;
})

modal.addEventListener("click", function(event) {
	if (event._isClick === true) return
	modal.classList.remove("modal-parent--active");
	document.body.classList.remove("stop-scroll");
})

// Modal close by Escape button
window.addEventListener("keydown", function(event) {
	if(event.key === "Escape") {
		modal.classList.remove("modal-parent--active");
		document.body.classList.remove("stop-scroll");
	} 
})

// Gallery
const swiper = new Swiper("#gallery", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,

	navigation: {
		prevEl: "#gallery-prev",
		nextEl: "#gallery-next",
	}
})