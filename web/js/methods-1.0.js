/*
 * methods-1.0.js
 * 
 * author: eFBe
 * Copyright 2011, The Weird Syndicate	
 * 
 * collects methods
 * will separate later
 *
 */

jQuery(document).ready(function($) {
	
	// global vars here
	var options = {
		body: $('body')
	}

	// inits here
	$('#Lights').bind('click', function (e) {
		e.preventDefault();
		$.switchLights();
	});
	
	// methods here
	$.switchLights = function () {
		options.body.toggleClass('nite');
	}
		
})