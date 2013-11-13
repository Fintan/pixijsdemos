//Version 2: added a blurred background with alpha to the line
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	var PIXI = require('pixi');

	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			var background = PIXI.Sprite.fromImage("img/bg.png");
			this.gameStage.addChild(background);

			this.movingObject = new Line({x:this.gameWidth/2, y:this.gameHeight/2});
			this.movingObject.x = 0;
			this.movingObject.y = this.gameHeight/2;
			this.movingObject.alpha = 0.2;

			this.gameStage.addChild(this.movingObject);

			this.movingObjectClone = new Line({x:this.gameWidth/2, y:this.gameHeight/2});
			this.movingObjectClone.x = this.movingObject.x;
			this.movingObjectClone.y = this.movingObject.y;
			background.addChild(this.movingObjectClone);
			
			this.vangle = 0;
			this.middle = this.gameHeight/2;
			this.vRadius = 4;
			this.vspeed = 0.5;

			this.angle = 0;
			this.centre = this.gameWidth/2;
			this.radius = this.gameWidth/2-20;
			this.speed = 0.1;

			// create a filter
			var blurFilter = new PIXI.BlurFilter();
			blurFilter.blur = 40;
			// set the filter
			background.filters = [blurFilter];

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		update: function() {

			this.x = this.centre + this.radius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.sin(this.radians(this.vangle));

			this.angle += this.speed;
			this.vangle += this.vspeed;
			this.vRadius += 0.01;

			this.movingObject.update(this.x, this.y);
			this.movingObjectClone.update(this.x, this.y);

		}
	};

	return MovingObject; 
});