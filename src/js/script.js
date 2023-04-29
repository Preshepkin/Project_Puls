
$(document).ready(function(){
	$('.carousel__inner').slick({
		dots: false,
		infinite: true,
		speed: 1600,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			  }
			},
			{
				breakpoint: 575,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows: false,
				  dots: true
				}
			  },
			  {
				breakpoint: 320,
				settings: {
				  arrows: false,
				  dots: true
				}
			  }
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});

		function toggleSlide(item) {
			$(item).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				})
			});
		};

		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');

	// >>-- MODAL

	// $('[data-modal=consultation]').on('click',function() {
	// 	$('.overlay,#consultation').fadeIn('slow');
	// });
	
	// $('.madal__close').on('click',function() {
	// 	$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	// });
	
	// // $('.button_mini').on('click',function(){
	// // 	$('.overlay, #order').fadeIn('slow');

	// // })
		$('[data-modal=consultation]').on('click', function() {
			$('.overlay, #consultation').fadeIn('slow');
		});
		$('.madal__close').on('click', function() {
			$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
		});

		$('.button_mini').each(function(i) {
			$(this).on('click', function() {
				$('#order .madal__descr').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			})
		});

	$('.button_mini').each(function(i) {
		$(this).on('click',function() {
			$('#order .madal__descr').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
		})
	});

	function validateForms(form){
        $(form).validate({
			errorClass: 'onerror',
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

	$('input[name=phone]').mask(' +7 (999) 999-99-99');
	
	/// Ajax

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

	///Smooth Scroll and pageup

	$(window).scroll(function(){
		if($(this).scrollTop()> 1600 )
		{
			$('.pageup').fadeIn();
		}else {
			$('pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

	new WOW().init(
		
	);

	});

