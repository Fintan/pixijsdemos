define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');

	var Ball = function(radius, colour, thickness) {

		this.init(radius, colour, thickness);
		
	};

	Ball.prototype = Object.create( PIXI.Graphics.prototype );
	
	_.extend(Ball.prototype, {

		init: function(radius, colour, thickness) {

			PIXI.Graphics.call(this);

			this.radius = radius || 10;
			this.ccolour = colour || 0xFF0000;
			this.tthickness = thickness || 4;

			this.draw();
			
		},

		draw: function() {
 
			this.beginFill(this.ccolour);
			
			this.lineStyle(this.tthickness, this.ccolour);

			this.drawCircle(0, 0, this.radius);
			
			this.endFill();

		},

		update: function(x, y) {

			this.position.x = x;
			this.position.y = y;

		}

	});

	return Ball; 
});