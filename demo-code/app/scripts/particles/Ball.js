define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var toxi = require('toxi');
	var TColor = toxi.color.TColor;

	var Ball = function(radius, colour, thickness) {

		this.init(radius, colour, thickness);
		
	};

	// constructor
	Ball.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(Ball.prototype, {

		init: function(radius, colour, thickness) {

			PIXI.Graphics.call(this);

			this.rradius = radius || 20;
			this.ccolour = colour || 0xFF0000;
			this.tthickness = thickness || 4;

			var myColor = TColor.newRGB(128/255,64/255,32/255);
			this.ccolour = myColor.toInt();
			
		},

		render: function() {
 
			//this.clear();
			
			this.beginFill(TColor.newHex('155e73').setBrightness(Math.random()).toInt());
			
			this.lineStyle(this.tthickness, this.ccolour);

			this.drawCircle(0, 0, this.rradius);
			
			this.endFill();
			 
			return this;

		}

	});

	return Ball; 
});