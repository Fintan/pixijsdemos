define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var PMath = require('utils/PMath');
	var TColor = require('toxi').color.TColor;
	
	var Noise2d = function() {};

	Noise2d.prototype = {

		setup: function() {

			this.graphics = new PIXI.Graphics();
			this.gameStage.addChild(this.graphics);

			this.colour = TColor.newHex('155e73');

			this.xstart = PMath.random(10); 
			this.ystart = PMath.random(10);

			//this._draw();
			
		},

		_draw: function() {

			this.graphics.clear();
			
			for(var y=0; y<=this.gameHeight; y+=5){ 
				this.ynoise += 0.01;
				this.xnoise = this.xstart; 
				for(var x=0; x<=this.gameWidth; x+=5){
					this.graphics.beginFill(this.colour.setBrightness(PMath.noise(this.xnoise, this.ynoise)).toInt());
					this.xnoise += 0.01;
					this.graphics.drawRect(x, y, 5, 5);
				}
			}

			this.graphics.endFill();

			this.xstart = this.xstart + 0.01; 
			this.ynoise = this.ystart + 0.01;

		},

		update: function() {

			this._draw();

		}
	};

	return Noise2d; 
});