//Version 3: play around with the settings to create a differnet curved path, use noise for randomness
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Line = require('./Line');
	var toxi = require('toxi');
	var Vec2D = toxi.geom.Vec2D;
	var PIXI = require('pixi');
	var PMath = require('utils/PMath');
	var TColor = toxi.color.TColor;

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
			this.movingObjectClone.alpha = 0.2;
			background.addChild(this.movingObjectClone);

			this.vangle = 0;
			this.middle = this.gameHeight/2;
			this.vRadius = 4;
			this.vspeed = 0.5;

			this.angle = 0;
			this.centre = this.gameWidth/2;
			this.radius = this.gameWidth/2-20;
			this.speed = 0.75;

			this.noiseOffset = 0;
			this.blurAmount = 40;

			// create a filter
			var blurFilter = new PIXI.BlurFilter();
			blurFilter.blur = this.blurAmount;
			// set the filter
			background.filters = [blurFilter];


			this.blue = TColor.newRGB(1/255,1/255,255/255);
			this.yellow = TColor.newRGB(255/255,255/255,1/255);

			this.movingObject.ccolour = this.blue.toInt();
			this.movingObjectClone.ccolour = this.yellow.toInt();

		},

		radians: function(aAngle) {
			return (aAngle / 180) * Math.PI;
		},

		update: function() {

			var noiseVal = PMath.map(PMath.noise(this.noiseOffset), 0, 1, -5, 5);
			this.noiseOffset += 0.05;

			//this.movingObject.ccolour = this.colour.toInt();

			this.x = this.centre + this.radius * Math.sin(this.radians(this.angle));
			this.y = this.middle + this.vRadius * Math.sin(this.radians(this.vangle));

			this.angle += this.speed;
			this.vangle += this.vspeed;
			this.vRadius += 0.005;
			
			this.movingObject.ccolour = this.blue.blend(this.yellow, PMath.noise(Math.random()) ).toInt();

			this.movingObject.update(this.x, this.y + noiseVal);
			this.movingObjectClone.update(this.x, this.y + noiseVal);

		}
	};

	return MovingObject; 
});