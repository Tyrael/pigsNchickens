/*
 * easterEgg.js
 * 
 * author: eFBe
 * Copyright 2011, The Weird Syndicate	
 * 
 * just a small test function to test jquery init
 * from the browser console
 *
 */

jQuery(document).ready(function($) { // global scope ftw
	var options = {
			body: $('body'),
			duration: 500,
			w: $(window) // store it cleverly
		},
		
		
		// let's say it's a dumb template, don't wanna fuck with createElement
		devListTemplate = '<div id="devList">' +
			'<h6>phat birds:</h6>' +
				'<dl>' +
					'<dt>The Evil Genius under da hood:</dt>' +
					'<dd>Tyrael (Ferenc Kovács)</dd>' +
					'<dt>Master of Surfaces:</dt>' +
					'<dd>eFBé (Balázs Foky)</dd>' +
				'</dl>' +
				'<button id="HideAuthors">don\'t care</button>' +
			'</div>',
		space = '<div id="Space">' +
			'</div>';


	$.setSpace = function () {
		options.body.prepend(space);
		
		if ($('#Space').length) {
			space = $('#Space'); // reset it to the element if it already exists
		}
		
		space.css('height', options.w.height()).end()
			.css('width', options.w.width());	
	}
	
	$.loadStyleSheet = function () {
		if ($('#Space').length) { // only if it already exists
			$('<link>').appendTo('head').end()
			.attr({
				rel: 'stylesheet',
				type: 'text/css',
				href: '/css/space.css'
			});
		} else {
			$.console.log('there\'s no such kinda element dude' )
		}
	}

	// methods in the jquery namespace look like this
	$.showDevelopers = function () {
		options.body.prepend(devListTemplate);
		
		var elem = $('#devList'),
			hide = $('#HideAuthors');
			
		if (elem.length) { // only when it's already exist
			elem.fadeIn(options.duration);
		}
		
		hide.bind('click', function() {
		  $.hideDevelopers();
		});
	}
	
	$.hideDevelopers = function () {
		var elem = $('#devList');
		
		if (elem.css('display') == 'block') {
			elem.fadeOut(options.duration, function() {
				elem.remove();
			});
		}
	}
		
})