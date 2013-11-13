//Generate a colour grid (composed of circles or rectangles) based on the image data of a png or jpg
define(function (require) {
	'use strict';
	var _ = require('underscore');
	var PIXI = require('pixi');
	var PMath = require('utils/PMath');
	var TColor = require('toxi').color.TColor;
	var image4 = require('image!img/hopper.jpg');
	var image = require('image!img/john.jpeg');
	var image3 = require('image!img/leaf.png');
	var image2 = require('image!img/eddie-plant.jpg');
	var getImageData = require('utils/getImageData');
	
	var PixelDataDemo = function() {};

	PixelDataDemo.prototype = {

		setup: function() {

			this.graphics = new PIXI.Graphics();
			this.gameStage.addChild(this.graphics);
			//this.graphics.scale.x = this.graphics.scale.y = 0.75;
			
			var canv = document.createElement('canvas');
			canv.width = image2.width;
			canv.height = image2.height;
			var ctx = canv.getContext('2d');
			ctx.drawImage(image2,0,0, image2.width, image2.height);

			this.data = ctx.getImageData(0, 0, image2.width, image2.height);
			this._draw();

		},

		getAveragePixelColour: function(x1, y1, x2, y2) {

			var r=0, g=0, b=0, a=0, pixelObs = [], count;
			for(var y=y1; y<y2; y+=1){ 
				for(var x=x1; x<x2; x+=1){
					pixelObs.push(this.getpixelcolour(x, y));
				}
			}

			count = pixelObs.length;

			for(var i=0; i<count; i++) {

				var rgb = pixelObs[i];
				r += rgb.r/count;
				g += rgb.g/count;
				b += rgb.b/count;
				//a = Math.floor(rgb.a/count);

			}

			return {r:Math.round(r), g:Math.round(g), b:Math.round(b), a:a};

		},

		getpixelcolour: function(x, y) {
			var pixels = this.data;
			var index = ((y * (pixels.width * 4)) + (x * 4));
			return {
				r: pixels.data[index],
				g: pixels.data[index + 1],
				b: pixels.data[index + 2],
				a: pixels.data[index + 3]
			};
		},

		componentToHex: function(c) {
			var hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		},

		rgbToHex: function(r, g, b, a) {
			return this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b)/*+ this.componentToHex(a)*/;
		},

		toInt: function(hex){
			return Number( '0x' + hex );
		},

		//http://stackoverflow.com/questions/3732046/how-do-you-get-the-hue-of-a-xxxxxx-colour
		rgbToHsl: function(r, g, b){

			r /= 255,
			g /= 255, 
			b /= 255;
			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;

			if(max === min){
				h = s = 0; // achromatic
			}else{
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max){
				case r: 
					h = (g - b) / d + (g < b ? 6 : 0); 
					break;
				case g: 
					h = (b - r) / d + 2;
					break;
				case b: 
					h = (r - g) / d + 4; 
					break;
				}
				h /= 6;
			}

			return [h, s, l];
		},

		_draw: function() {

			this.graphics.clear();

			var sampleSize = 20;

			for(var y=0; y<image2.height; y+=sampleSize){ 

				
				for(var x=0; x<image2.width; x+=sampleSize){

					var col = this.getAveragePixelColour(x, y, x+sampleSize, y+sampleSize);
					//b&w image
					//this.graphics.beginFill(this.toInt(this.rgbToHex(col.b, col.b, col.b, col.a)));
					this.graphics.beginFill(this.toInt(this.rgbToHex(col.r, col.g, col.b, col.a)));

					this.graphics.drawCircle(x, y, sampleSize/2);
					/*if(this.rgbToHsl(col.r, col.g, col.b)[0] > 0.7) {

						//this.graphics.drawRect(x, y, sampleSize, sampleSize);
					}else {

						this.graphics.drawCircle(x, y, sampleSize/2);
					}*/

					this.graphics.endFill();
					
				}

					
			}

		},

		update: function() {

			//too processor-intensive to run on every frame!

		}
	};

	return PixelDataDemo; 
});