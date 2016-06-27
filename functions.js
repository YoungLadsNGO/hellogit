if ($(window).width() > 640) {
  var carousel_top = $('.carosel').offset().top;

  $(window).scroll(function() {
    var currentScroll = $(window).scrollTop();

    if (currentScroll > carousel_top - $(window).height() + 300) {
      marginLeft = -(($(window).scrollTop() + $(window).height()) - carousel_top - 300) * 2.5;
      // console.log(marginLeft);
      $('#how .carosel .card-holder').css({
        'margin-left': (marginLeft) + 'px'
      });
    }
  });
}
// -----------

$(window).scroll(function() {
		$('.galary .row').each(function(){

		var imagePos = $(this).offset().top;
    // alert();
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {

				// $('.galary .row:nth-child(2)').addClass("animated fadeInRight");
        // $('.galary .row:nth-child(2)').css({
        //   'visibility': 'visible'
        // });

        $('.galary .row').each(function(i) {
          setTimeout(function() {
            $('.galary .row').eq(i).addClass("animated fadeInLeft");
            $('.galary .row').eq(i).css({
              'visibility': 'visible'
            });
          }, 250 * (i + 1));

        });





			}
		});
	});
