$(document).ready(function(){

  //dynamically adjust the margin of content according to the navbar height
  let navbarHeight = $('#main_menu').css('height');
  $('section.main.container,section.row.mainslider').css('margin-top', navbarHeight);
  $('section.main.container').css('margin-top', (parseInt(navbarHeight)+50)+'px');

  	var selectedClass = "";
	$(".filter").click(function(){
		selectedClass = $(this).attr("data-rel");
		$("#gallery").fadeTo(100, 0.1);
		$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
		setTimeout(function() {
		$("."+selectedClass).fadeIn().addClass('animation');
		$("#gallery").fadeTo(300, 1);
		}, 300);
	});
});

$('.pics img').click(function(){
	let src = $(this).attr('src');
	window.open(src);
});

$(document).on('click', 'button.filter', function(){
  $('button.filter').removeClass('button-primary');
  $(this).addClass('button-primary');
});


$(window).resize(function(){

  //dynamically adjust the margin of content according to the navbar height
  let navbarHeight = $('#main_menu').css('height');
  $('section.main.container,section.row.mainslider').css('margin-top', navbarHeight);
  $('section.main.container').css('margin-top', (parseInt(navbarHeight)+50)+'px');

});