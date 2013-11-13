define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var toxi = require('toxi');
	var TColor = toxi.color.TColor;

	var PerpendicularLine = function() {

		this.init();
		
	};

	PerpendicularLine.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(PerpendicularLine.prototype, {

		init: function() {

			PIXI.Graphics.call(this);

			this.colour = 0xFFFFFF;
			this.thickness = 2;
			
			this.beginFill(this.colour);
			this.lineStyle(this.thickness , this.colour);
			
		},

		update: function(x, y, x2, y2) {

			this.lineStyle(this.thickness , this.colour);
			this.moveTo(x, y);
			this.lineTo(x2, y2);

			this.lastX = x;
			this.lastY = y;

		}

	});

	return PerpendicularLine; 
});