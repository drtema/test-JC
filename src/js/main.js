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
function navMenu() {
	const overlay = document.createElement('div');
	overlay.id = 'overlay';
	let overlayVibility = false;
	
	 $(".hamburger").on("click", function(e) {
	  $(".hamburger").toggleClass("is-active");
	   $(".nav").toggleClass("active");
	    $(".header").append(overlay);
	    if (overlayVibility == false) {
	    	$("#overlay").css({
				'opacity' : '0.5',
				'visibility' : 'visible'
			});
			overlayVibility = true;
	    	overlayHandler();
			
	    } else {
	    	$("#overlay").css({
				'opacity' : '0',
				'visibility' : 'hidden'
			});
			overlayVibility = false;
			overlayHandler();
	    }
		function overlayHandler(){
			$("#overlay").on("click", function() {
						$("#overlay").css({
							'opacity' : '0',
							'visibility' : 'hidden'
						});
						overlayVibility = false;
						$(".hamburger").removeClass("is-active");
						$(".nav").removeClass("active");
						console.log(overlayVibility);
					});
		}
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
	  navMenu();
  });