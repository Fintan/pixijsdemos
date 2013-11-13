//Version 5: Draw a perpendicular line from current angle to the opposite angle
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	var PerpendicularLine = require('./PerpendicularLine');
	var toxi = require('toxi');
	var Vec2D = toxi.geom.Vec2D;
	var PIXI = require('pixi');

	var MovingObject = function() {};

	MovingObject.prototype = {

		setup: function() {

			var background = PIXI.Sprite.fromImage("img/bg.png");
			this.gameStage.addChild(background);

			this.movingObject = new PerpendicularLine();
			this.movingObject.ccolour = 0xf6dd33;
			this.movingObject.alpha = 0.1;
			this.movingObject.thickness = 1;

			this.gameStage.addChild(this.movingObject);

			this.movingObjectClone = new Line();
			
			background.addChild(this.movingObjectClone);

			this.angle = 0;
			this.speed = 0.5;
			this.middle = this.gameHeight/2;
			this.centre = this.gameWidth/2;
			this.vRadius = 15;
			this.hRadius = 15;

			this.varianceVal = 0;
			this.radiusVariance = 0;

			var blurFilter = new PIXI.BlurFilter();
			blurFilter.blur = 40;
			background.filters = [blurFilter];

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		createVariance: function(value) {
			return Math.sin(value);
		},

		update: function() {

			this.varianceVal += 0.05;
			this.radiusVariance = this.createVariance(this.varianceVal);
			this.vRadius = this.vRadius + this.radiusVariance;
			this.hRadius = this.hRadius + this.radiusVariance;
			this.vRadius += 0.0161803398875;
			this.hRadius += 0.0161803398875;

			this.x = this.centre + this.hRadius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.cos(this.radians(this.angle));

			var oppositeRadian = this.radians(this.angle) + Math.PI;

			this.x2 = this.centre + this.hRadius * Math.sin(oppositeRadian);
			this.y2 = this.middle + this.vRadius * Math.cos(oppositeRadian);


			this.angle += this.speed;

			this.movingObject.update(this.x, this.y, this.x2, this.y2);
			this.movingObjectClone.update(this.x, this.y);

		}
	};

	return MovingObject; 
});