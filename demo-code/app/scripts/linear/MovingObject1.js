//Version 1: plot a line using Math.sin to plot the position of both x and y
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');

	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			this.movingObject = new Line({x:this.gameWidth/2, y:this.gameHeight/2});
			
			this.gameStage.addChild(this.movingObject);

			this.vangle = 0;
			this.middle = this.gameHeight/2;
			this.vRadius = 40;
			this.vspeed = 0.5;

			this.angle = 0;
			this.centre = this.gameWidth/2;
			this.radius = this.gameWidth/2-20;
			this.speed = 0.1;

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		update: function() {

			this.x = this.centre + this.radius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.sin(this.radians(this.vangle));

			this.angle += this.speed;
			this.vangle += this.vspeed;

			this.movingObject.update(this.x, this.y);

		}
	};

	return MovingObject; 
});