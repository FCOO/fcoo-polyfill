/****************************************************************************
	fcoo-polyfill.js, 

	(c) 2016, FCOO

	https://github.com/FCOO/fcoo-polyfill
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//or var ns = window;

	var plugin_count = 1000;

	function FcooPolyfill( $elem, options, plugin_count) {
		this.plugin_count = plugin_count;
		this.VERSION = "0.0.2";
		this.options = $.extend({
			//Default options
		}, options || {} );


		//If FcooPolyfill is a extention of class "ParentClass" include the next line 
		//window.ParentClass.call(this, input, options, plugin_count );

	
	}
  
  // expose access to the constructor
  ns.FcooPolyfill = FcooPolyfill;


	//fcooPolyfill as jQuery prototype
	$.fn.fcooPolyfill = function (options) {
		return this.each(function() {
			if (!$.data(this, "fcooPolyfill"))
				$.data(this, "fcooPolyfill", new window.FcooPolyfill(this, options, plugin_count++));
		});
	};


	//Extend the prototype
	ns.FcooPolyfill.prototype = {

		//myMethod
		myMethod: function( /*arg1, arg2*/ ){
		},
		


	};

	//If FcooPolyfill is a extention of class "ParentClass" include the next line 
	//window.FcooPolyfill.prototype = $.extend( {}, window.ParentClass.prototype, window.FcooPolyfill.prototype );


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));