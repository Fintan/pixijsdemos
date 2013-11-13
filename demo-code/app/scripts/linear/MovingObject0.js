//Version 0: animate a line using Math.sin to plot the position of x (y is fixed)
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	var toxi = require('toxi');
	var Vec2D = toxi.geom.Vec2D;

	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			this.movingObject = new Line({x:this.gameWidth/2, y:this.gameHeight/2});
			
			this.gameStage.addChild(this.movingObject);

			this.angle = 0;
			this.centre = this.gameWidth/2;
			this.radius = this.gameWidth/2-20;
			this.speed = 0.3;

		},

		radians: function(angle) {
			return (angle / 180) * Math.PI;
		},

		update: function() {

			this.x = this.centre + this.radius * Math.sin(this.radians(this.angle));
			
			this.angle += this.speed;
			
			this.movingObject.update(this.x, this.gameHeight/2);

		}
	};

	return MovingObject; 
});