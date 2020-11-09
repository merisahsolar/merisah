$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay: 4000,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		700: {
			items: 2,
			nav: false,
		},
		1000: {
			items: 3,
			nav: false,
		},
	},
});
