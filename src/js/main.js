function emailValidation() {
	$('#email').on('change keypress focus',function() {
				if($(this).val() != '') {
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if(pattern.test($(this).val())){
						$(this).css({
										'border' : '1px solid rgb(0,195,121)',
										'box-shadow' : '0 0 10px rgba(0,195,121,0.7)'
									});
					} else {
						$(this).css({
										'border' : '1px solid rgb(200,0,0)',
										'box-shadow' : '0 0 10px rgba(200,0,0,0.7)'
									});
					}
				} else {
					$(this).css({
									'border' : '1px solid rgb(200,0,0)',
									'box-shadow' : '0 0 10px rgba(200,0,0,0.7)'
								});
				}
			});
	$('#email').focusout(function() {
		if($(this).val() === '') {
			$(this).css({
							'border' : '1px solid #6e7279',
							'box-shadow' : 'none'
						});
		}
	});
}
function burgerMenu() {
	 $(".hamburger").on("click", function(e) {
	  $(".hamburger").toggleClass("is-active");
	   // Do something else, like open/close menu
	   $(".burger-menu").toggleClass("active");
	    $(".burger-menu").css({
	    	'margin-left' : '0'
	    });
	 });
}
function slickSlider(){
	$('.slider').slick({
	    adaptiveHeight:true,
	    autoplay:true,
	    pauseOnHover:true,
	    swipeToSlide:true,
	    prevArrow: '<button type="button" class="previousArr"><img src="img/chevron-left.svg"></button>',
		nextArrow: '<button type="button" class="nextArr"><img src="img/chevron-right.svg"></button>'
	  });
	  $('slide').slick();
}

$(document).ready(function(){
      slickSlider();
	  emailValidation();
	  burgerMenu();
  });