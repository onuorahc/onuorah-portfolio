$(function() {
    $(window).scroll( function(){ 
       
        $('.fadeIn').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 2500;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
        
        }); 
    
    });
});

/*var jumboHeight = $('.overlay').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.jumbotron').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});*/

//Support for smooth scrolling
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 5
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


//Setting the active image in my gallery
$('.gallery article > img').click(function() {
				$(this).parents("article").addClass("active");
			});
			$('.gallery .info').click(function() {
				$(this).parents("article").addClass("active");
			});
			$('.gallery .full i').click(function() {
				$(this).parents("article").removeClass("active");
			});

