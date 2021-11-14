
$(document).ready(function() {

	$('.slider-radius__conteiner').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 5,
	  prevArrow: '<div class="ar_slier prev-ar_slide"></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"></div>',
	  responsive: [
	    {
	      breakpoint: 1700,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]  
	});

	$('.slider-news__conteiner').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 5,
	  centerMode: true,
      centerPadding: '0px',
	  prevArrow: '<div class="ar_slier prev-ar_slide"></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"></div>',
	  asNavFor: '.marketing-sec__slider',
	  responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2,
	        centerMode: false,
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	        centerMode: false,
	      }
	    },
	  ]  
	});

	$('.marketing-sec__slider').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 1,
	  prevArrow: false, 
	  nextArrow: false,
	  asNavFor: '.slider-news__conteiner',
 
	});

	//graphic animate
	$('.grafics-conteiner__box .grafics-conteiner__val-max').css({
		'height': '0'
	})
	$('.grafics-conteiner__box .grafics-conteiner__val-min').css({
		'height': '0'
	})
	$(window).scroll(function() { 
	    let theTop = $(document).scrollTop();
	    let grafElement = $('.grafics-conteiner__box');
	    grafElement.each(function(index, el) {

	    	let topAnimElement = $(this).offset().top;
	    	let qurientAnimElementTop = topAnimElement - 800;
	    	let allHeight = $(this).find('.grafics-conteiner__val-max').attr('data-all-height');
	    	let minHeight = $(this).find('.grafics-conteiner__val-min').attr('data-min-height');


	    	if(theTop >= qurientAnimElementTop){
	    		$('.grafics-conteiner__wrapepr').addClass('actline')
	    		$(this).addClass('activ-grafic');
	    		$(this).find('.grafics-conteiner__val-max').css({
	    			'height': allHeight + 'px'
	    		});
	    		$(this).find('.grafics-conteiner__val-min').css({
	    			'height': minHeight + 'px'
	    		});
	    	}

	    	console.log(topAnimElement)
	    });

	    console.log(theTop);	
	});


	//show sub nav
	$('.dop-list-nav').on('mouseenter',function(){
		$(this).find('.sub-list-nav').show(300);
	});
	$('.dop-list-nav').on('mouseleave',function(){
		$(this).find('.sub-list-nav').hide(300);
	});


	//marketings more info
	$('.marketings__box-header').on('click',function(){
		$(this).closest('.marketings__box').find('.box-body-marketings').slideToggle(500, function(){
			if($(this).is(':visible')){
				$(this).closest('.marketings__box').find('.marketings__more-ic').addClass('activ-tab');
			}
			else{
				$(this).closest('.marketings__box').find('.marketings__more-ic').removeClass('activ-tab');
			}
		})
	})


	//popup galegy
	$('.popup-galery').on('click', function(e){

		e.preventDefault();
		let firstImage = $(this).attr('data-src');
		let imageArray = [];
		let oldImgArray = $('.popup-galery');
		let valueDeleteIndex;
		
		$.each(oldImgArray, function(index, val) {
			 let sada=$(this).attr('data-src')
			 imageArray.push(sada)
		});

		for(i = 0; i < imageArray.length; i++){
			if(imageArray[i] == firstImage){
				valueDeleteIndex = [i];
			}
		}
		imageArray.splice(valueDeleteIndex, 1);
		imageArray.unshift (firstImage);
        openGaleryPopup ();
		console.log(imageArray)

		for(i = 0; i < imageArray.length; i++){
		    let imgSrc = $('<div class="galery-image"><img src="'+imageArray[i]+'" alt=""></div>')
		    $('.galery-popup-conteiner__slider').append(imgSrc);
		}

		$('.galery-popup-conteiner__slider').slick({
			infinite: true,
			speed: 1000,
			adaptiveHeight: true,
			slidesToScroll: 1,
			dots: false,                                                                                                                                                                                                               
			slidesToShow: 1, 
			prevArrow: '<div class="ar_slier prev-ar_slide"></div>', 
	        nextArrow: '<div class="ar_slier next-ar_slide"></div>',
		});

		$('.galery-popup-conteiner__close').on('click', () =>{
			imageArray = [];
			$('.bg-popup').removeClass('activGalery');
			$('.galery-popup-conteiner__slider').slick('destroy');
			$('.galery-popup-conteiner__slider').empty();
		});
	});

	function openGaleryPopup (){
		$('.bg-popup').addClass('activGalery');
	}


	//faq
	$('.faq-box__header').on('click',function(){
		$(this).closest('.faq-box').find('.faq-box__body').slideToggle(500, function(){
			if($(this).is(':visible')){
				$(this).closest('.faq-box').find('.faq-box__point').addClass('activ-faq');
			}
			else{
				$(this).closest('.faq-box').find('.faq-box__point').removeClass('activ-faq');
			}
		})
	})

	//slider news single
	$('.single-news__slider').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: true,                                                                                                                                                                                                               
	  slidesToShow: 1, 
	  prevArrow: false,
      nextArrow: false
	});

	//prodycts grafics
    var data = {
	  series: [32,11,57]
	};

	var sum = function(a, b) { return a + b };
	var options1 = {
	  width: 400,
	  height: 400
	};
	if(window.matchMedia('(max-width: 550px)').matches){
		options1 = {
		  width: 270,
		  height: 270
		};
	}


	new Chartist.Pie('.ct-chart', data, options1, {
	  labelInterpolationFnc: function(value) {
	    return Math.round(value / data.series.reduce(sum) * 100) + '%';
	  }
	});
    
    //upstream grafic 1
	 var data = {
	  series: [32,11,57]
	};
	var options2 = {
	  width: 300,
	  height: 300
	};
	if(window.matchMedia('(max-width: 550px)').matches){
		options2 = {
		  width: 270,
		  height: 270
		};
	}

	var sum = function(a, b) { return a + b };

	new Chartist.Pie('.diagram-gas', data, options2, {
	  labelInterpolationFnc: function(value) {
	    return Math.round(value / data.series.reduce(sum) * 100) + '%';
	  }
	});

    //upstream grafic 2
	 var data = {
	  series: [32,11,57]
	};
	var options3 = {
	  width: 300,
	  height: 300
	};
	if(window.matchMedia('(max-width: 550px)').matches){
		options3 = {
		  width: 270,
		  height: 270
		};
	}

	var sum = function(a, b) { return a + b };
	new Chartist.Pie('.diagram-oil', data, options3,  {
	  labelInterpolationFnc: function(value) {
	    return Math.round(value / data.series.reduce(sum) * 100) + '%';
	  }
	});


	//header mob nav
	$('.header__meny-conteiner').on('click',function(){
		let menyIcon = $(this);
        let mobNav = $('.header__mob-nav');
        mobNav.slideToggle(400,function(){
        	if($(this).is(':visible')){
        		menyIcon.addClass('act-mob-nav');
        	}
        	else{
        		menyIcon.removeClass('act-mob-nav');
        	}
        })
	});

	$('.menu-item-has-children').on('click',function(){
		let clickItem = $(this);
        let subMeny = $(this).find('.sub-menu');
        subMeny.slideToggle(400,function(){
        	if($(this).is(':visible')){
        		clickItem.addClass('act-sub-meny');
        	}
        	else{
        		clickItem.removeClass('act-sub-meny');
        	}
        })
	});

	//searck open
	$('.header__ic-search').on('click', () => {
		$('.header__search-conteiner').addClass('header__search-conteiner_activ')
	});

	$('.header__close-serch').on('click', () => {
		$('.header__search-conteiner').removeClass('header__search-conteiner_activ')
	});
});