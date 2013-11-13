define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var Barrel = require('./Barrel');
	var pMath = require('vendor/processing/P5Functions/Math');

	var CanonView = function() {

		this.init();
		
	};

	// constructor
	CanonView.prototype = Object.create( PIXI.Graphics.prototype );

	_.extend(CanonView.prototype, {

		init: function() {

			PIXI.Graphics.call(this);
			pMath(this);

			this.angle = 0;
			this.barrel = new Barrel();
			
		},

		setAngle: function(radians) {
		
			this.angle = this.constrain(radians, -1.57, 1.57);
			this.barrel.rotation = this.angle;
			
		},
	
		updateAngle: function(radians) {
		
			this.angle += radians;
			this.angle = this.constrain(this.angle, -1.57, 1.57);
			this.barrel.rotation = this.angle;
			
		},
	
		getAngle: function() {

			return this.angle;

		},

		render: function() {

			this.clear();
			this.lineStyle(2, 0x0000FF);
			//this.beginFill(0x00FF00);
			this.drawRect(-15, -8, 30, 16);
			//this.endFill();
			
			this.barrel.rotation = this.angle;
			this.addChild(this.barrel.render());

			return this;

		}

	});

	return CanonView; 
});