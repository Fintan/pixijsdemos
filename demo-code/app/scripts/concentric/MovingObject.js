//Version 1: draw a simple circle
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	
	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			this.movingObject = new Line();
			
			this.gameStage.addChild(this.movingObject);

			this.angle = 0;
			this.speed = 0.5;
			this.middle = this.gameHeight/2;
			this.centre = this.gameWidth/2;
			this.vRadius = 100;
			this.hRadius = 100;

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		update: function() {

			this.x = this.centre + this.hRadius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.cos(this.radians(this.angle));

			this.angle += this.speed;

			this.movingObject.update(this.x, this.y);

		}
	};

	return MovingObject; 
});