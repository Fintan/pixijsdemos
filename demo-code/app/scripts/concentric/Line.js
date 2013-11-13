define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var toxi = require('toxi');
	var TColor = toxi.color.TColor;

	var Line = function() {

		this.init();
		
	};

	// constructor
	Line.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(Line.prototype, {

		init: function() {

			PIXI.Graphics.call(this);

			this.colour = 0xFFFFFF;
			this.thickness = 2;
			
			this.beginFill(this.colour);
			this.lineStyle(this.thickness , this.colour);
			
		},

		update: function(x, y) {

			this.lineStyle(this.thickness , this.colour);
			this.moveTo(this.lastX, this.lastY);
			this.lineTo(x, y);

			this.lastX = x;
			this.lastY = y;

		}

	});

	return Line; 
});