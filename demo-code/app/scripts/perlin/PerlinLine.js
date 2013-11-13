define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var PMath = require('utils/PMath');
	
	var PerlinLine = function() {};

	PerlinLine.prototype = {

		setup: function() {

			this.yoff = 0;

			this.graphics = new PIXI.Graphics();

			this.gameStage.addChild(this.graphics);

		},

		update: function() {

			var xoff = 0;

			this.graphics.clear();
			this.graphics.beginFill(0x00FF00);
			this.graphics.lineStyle(2, 0x00FF00);
			this.graphics.moveTo(0, this.gameHeight);
	
			for (var x = 0; x <= this.gameWidth; x+=10) {

				var noiseVal = PMath.map(PMath.noise(xoff, this.yoff), 0, 1, 200, 400);
				this.graphics.lineTo(x, noiseVal);
				xoff += 0.05;
			}

			this.yoff += 0.005;

			this.graphics.lineTo(this.gameWidth, this.gameHeight);
			this.graphics.endFill();

		}
	};

	return PerlinLine; 
});