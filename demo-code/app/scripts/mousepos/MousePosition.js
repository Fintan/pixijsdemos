define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var PMath = require('utils/PMath');
	var toxi = require('toxi');
	var TColor = toxi.color.TColor;

	var MousePosition = function() {};

	MousePosition.prototype = {
		setup: function() {

			this.graphics = new PIXI.Graphics();
			this.colour = TColor.newHex('155e73');
			this.max_distance = PMath.dist(0, 0, this.gameWidth, this.gameHeight);
			this.gameStage.addChild(this.graphics);
			
			this.mouseData = {x:0, y:0};

			this.graphics.interactive = true;
			this.graphics.mousemove = _.bind(function(mouseData) {
				
				this.mouseData = mouseData.getLocalPosition(this.gameStage);

			}, this);

		},

		drawCircle: function(x, y, size) {

			this.graphics.beginFill(this.colour.setBrightness(PMath.map(this.mouseData.x, 0, this.gameWidth, 0.2,0.8)).toInt());
			this.graphics.lineStyle(2, this.colour);
			this.graphics.drawCircle(x, y, size);
			this.graphics.endFill();

		},

		update: function() {

			this.graphics.clear();

			for(var i = 0; i <= this.gameWidth; i += 50) {
				for(var j = 0; j <= this.gameHeight; j += 50) {
					var size = PMath.dist(this.mouseData.x, this.mouseData.y, i, j);
					size = size/this.max_distance * 60;
					this.drawCircle(i, j, size);
				}
			}

		}
	};

	return MousePosition; 
});