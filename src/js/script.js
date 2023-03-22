
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
