
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	speed:	1800,
	controls:false,
	autoplay: false,
	nav:false
  });

  document.querySelector('.prev').addEventListener('click',function	()	
  {slider.goTo('prev')});

  document.querySelector('.next').addEventListener('click',function	()	
  {slider.goTo('next')});   

  $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.catalog__tab').removeClass('active').eq($(this).index()).addClass('active');
  });