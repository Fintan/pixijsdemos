//Version 3: radius grows on every iteration
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	var toxi = require('toxi');
	var Vec2D = toxi.geom.Vec2D;

	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			this.movingObject = new Line();

			this.gameStage.addChild(this.movingObject);

			this.angle = 0;
			this.speed = 0.5;
			this.middle = this.gameHeight/2;
			this.centre = this.gameWidth/2;
			this.vRadius = 5;
			this.hRadius = 5;

			this.varianceVal = 0;
			this.radiusVariance = 0;

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		createVariance: function(value) {
			return Math.sin(value);
		},

		update: function() {

			this.varianceVal += 0.1;
			this.radiusVariance = this.createVariance(this.varianceVal);
			this.vRadius = this.vRadius + this.radiusVariance;
			this.hRadius = this.hRadius + this.radiusVariance;
			this.vRadius += 0.01;
			this.hRadius += 0.01;

			this.x = this.centre + this.hRadius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.cos(this.radians(this.angle));

			this.angle += this.speed;

			this.movingObject.update(this.x, this.y);

		}
	};

	return MovingObject; 
});