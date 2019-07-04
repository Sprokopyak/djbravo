//active class to navigation
     $('nav ul li a').click(function(a){
        $('nav ul li a').removeClass('nav-active');
        $(this).addClass('nav-active');
     });

  $(window).scroll(function(){
    if($(this).scrollTop() < 1) {
      $("nav ul li a").removeClass("nav-active");
    }
  });

//menu mobile
(function($) { 
  $(function() { 
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle(
      );
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
     
    $('.nav-list li a').on("click", function(){
    $('.nav-list').hide();
    $("#nav-toggle").removeClass("active");
});
  }); 
})(jQuery); 

//circle
var el = $('.circle'),
    inited = false;
el.appear({ force_process: true });
el.on('appear', function() {
  if (!inited) {
    el.circleProgress({ });
    inited = true;
  }
});
var circle = $('.circle').circleProgress({
  size: 140 
});
circle.on('circle-animation-progress', function(e, p, v) {
  var obj = $(this).data('circle-progress'),
      ctx = obj.ctx,
      s = obj.size,
      sv = (100 * v).toFixed(),
      fill = obj.arcFill;
  ctx.save();
  ctx.font = "bold " + s / 2.5 + "px sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fill;
  ctx.fillText(sv, s / 2, s / 2);
  ctx.restore();
});

 $(document).ready(function(){
     
     //slow movement
    $("#menu, .down, .carousel-caption").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 70;
        $('body,html').animate({scrollTop: top}, 1000);
    });
      $("#down, .carousel-caption").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 110;
        $('body,html').animate({scrollTop: top}, 1000);
    });
     
     //button up
  $('body').append('<button class="btn_up" />');
  $('.btn_up').click(function(){
    $('body').animate({'scrollTop':0}, 1000);
    $('html').animate({'scrollTop':0}, 1000);
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 300 ) {
      $('.btn_up').addClass('active');
    } else {
      $('.btn_up').removeClass('active'); 
    }    
  });
     
//     fixed scroll menu
  $("#header").removeClass("navbar-fixed");
  $(window).scroll(function(){
    if($(this).scrollTop() > 30) {
      $("#header").addClass("navbar-fixed").fadeIn('fast');
    } else {
      $("#header").removeClass("navbar-fixed").fadeIn('fast');
    };
  });
});
 
new WOW().init();

//gallery
 $(document).ready(function() {
      $('#ul-li, #ig').lightGallery({
        selector: 'li'
      });
      $('#show_more').click(function(){
        $('#more_photo').css("display", "block");
        $('#photo').css("display", "block");
        $('#show_more').css("display", "none");
      })
});


//Form validation
;(function($){
  	jQuery.fn.sendFormLP = function(options){
  		options = $.extend({
            toEmail: 'oleg-pukas@ukr.net',
            fromEmail: 'info@djbravo.ua',
            interval : 9000
        }, options);
	    var make = function(){
	    	$(this).submit(function(e){
	        	e.preventDefault();
	        	var $this = $(this);
	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            $items.removeClass('error');
	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });
	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });
		            var m_data = '';
		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }     
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });
	    };
	    return this.each(make); 
  	};
})(jQuery);

$(function(){
	$('form').sendFormLP({
		toEmail: 'oleg-pukas@ukr.net',
        fromEmail: 'info@djbravo.ua',
		interval: 9000
	});
});

