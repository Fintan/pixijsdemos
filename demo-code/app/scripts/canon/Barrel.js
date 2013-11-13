define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');

	var Barrel = function() {
		this.init();
	};

	// constructor
	Barrel.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(Barrel.prototype, {

		init: function() {

			PIXI.Graphics.call(this);

		},

		render: function() {

			this.clear();
		
			this.lineStyle(2, 0x0000FF);
			//this.graphics.beginFill(0xFFFFFF);
			this.drawRect(0, -4, 50, 8);
			//this.graphics.endFill();

			return this;

		}

	});

	return Barrel; 
});