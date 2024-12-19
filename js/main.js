$(document).ready(function () {
	const $window = $(window);

	const checkWidth = () => $window.width() <= 768;

	const cardPosition = () => {
			const windowsize = $window.width();
			if (windowsize <= 767) {
					$(".footer-card").html($('.payment-list'));
			} else {
					$(".payment").html($('.payment-list'));
			}
	};

	$window.resize(cardPosition);
	cardPosition();

	$(".nav-link").on("click", function (e) {
			if (checkWidth() && !$(this).parent(".nav-item").hasClass("active")) {
					e.preventDefault();
					$(".nav-item").addClass("hidden");
					const $parent = $(this).parent(".nav-item");
					$parent.removeClass("hidden").addClass("active");
					$parent.find(".nav-submenu .nav-submenu-list").each(function () {
							$(this).find(".nav-submenu-item").first().addClass("active");
					});
					$(".nav").addClass("active");
			}
	});

	$(".back-to").on("click", function (e) {
			if (checkWidth() && !$(this).hasClass("lvl_2")) {
					e.preventDefault();
					$(".nav-item").removeClass("hidden");
					$(this).parent(".nav-item").removeClass("active");
					$(".nav").removeClass("active");
			}
	});

	$(".nav-submenu-list").on("click", function (e) {
			if (checkWidth()) {
					e.preventDefault();
					$(".nav-submenu-list, .nav-link").addClass("hidden");
					const parent = $(".nav-item.active .nav-link").html();
					const thisElement = $(".nav-submenu-item.active .nav-submenu-link").first().html();
					$(".nav-submenu-item.active .nav-submenu-link").first().html(
							`<p class="nav-submenu-parent">${parent}/</p>${thisElement}`
					);
					$(this).removeClass("hidden").addClass("active");
					$(".back-to").addClass("lvl_2");
			}
	});

	$(document).on("click", ".back-to.lvl_2", function (e) {
			if (checkWidth()) {
					e.preventDefault();
					$(".nav-submenu-list").removeClass("hidden active");
					$(".nav-link").removeClass("hidden active");
					$(this).parent().addClass("active");
					$(this).removeClass("lvl_2");
					$(".nav-submenu-parent").remove();
			}
	});

	if (checkWidth() && parseInt($(".minicart-count").html(), 10) === 0) {
			$(".minicart").addClass("ziro");
	}

	$(".newsletter-submit").on("click", function (e) {
			if (!$(".newsletter-form").hasClass("active")) {
					e.preventDefault();
			} else {
					const email = $(".js-newsletter-input").val();
					const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if (emailRegex.test(email)) {
							e.preventDefault();
							$(".newsletter-form").removeClass("error").addClass("success");
					} else {
							$(".newsletter-form").addClass("error");
							e.preventDefault();
					}
			}
	});

	$(".js-newsletter-input").on("keyup", function () {
			if ($(this).val().length > 0) {
					$(".newsletter-form").addClass("filled");
			} else {
					$(".newsletter-form").removeClass("filled active");
			}
	});

	$(".newsletter-label").on("click", function () {
			if (!$(".js-newsletter-polices-checkbox").prop("checked") && $(".newsletter-form").hasClass("filled")) {
					$(".newsletter-form").addClass("active");
			} else {
					$(".newsletter-form").removeClass("active");
			}
	});

	$(".recommendation-add_wishlist").on("click", function () {
			$(this).toggleClass("active");
	});
});
