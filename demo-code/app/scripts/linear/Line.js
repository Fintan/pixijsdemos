define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var toxi = require('toxi');
	var TColor = toxi.color.TColor;

	var Line = function(origin) {

		this.init(origin);
		
	};

	// constructor
	Line.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(Line.prototype, {

		init: function(origin) {

			PIXI.Graphics.call(this);

			this.ccolour = 0xFFFFFF;
			this.tthickness = 2;

			this.lastX = origin.x;
			this.lastY = origin.y;

			this.draw();
			
		},

		draw: function() {
 
			this.beginFill(this.ccolour);
			this.lineStyle(2, this.ccolour);
			this.moveTo(this.lastX, this.lastY);

		},

		update: function(x, y) {

			this.lineStyle(2, this.ccolour);
			this.moveTo(this.lastX, this.lastY);
			this.lineTo(x, y);

			this.lastX = x;
			this.lastY = y;

		}

	});

	return Line; 
});