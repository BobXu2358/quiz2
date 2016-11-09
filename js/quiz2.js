// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){

	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});
	console.log("this is a message for you!!!");

	$('li').each(function changeLi() {
		$(this).text($(this).text() + " (appended text with jQuery)");
		$(this).css('color', 'red');
	});


	var hidden = $('#accordion_demo > p');
	hidden.hide();
	$('#accordion_demo > h3').click(function() {
		hidden.slideDown();
	});

	$('#bye').click(function() {
		$('body').children().fadeOut(500);
		setTimeout(function() {
			$('body').text("Goodbye!");
		}, 500);
	});

	$('#custom').click(function() {
		$('#custom').text("Wanna hear this interesting fact again? Click one more time!");
		$('#img_holder').append('<img src="img/awesome.jpg" />');
	});

})(jQuery);
