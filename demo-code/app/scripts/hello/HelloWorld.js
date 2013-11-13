define(function (require) {
	'use strict';
	var PIXI = require('pixi');
	
	var HelloWorld = function() {};

	HelloWorld.prototype = {

		setup: function() {

			this.graphics = new PIXI.Graphics();
			this.graphics.beginFill(0x00FF00);
			this.graphics.lineStyle(3, 0x0000FF);
			this.graphics.drawRect(0,0,20,20);
			this.graphics.endFill();	

			this.graphics.position.y = this.gameHeight/2;	

			this.gameStage.addChild(this.graphics);

			this.count = 0;

		},

		update: function() {

			
			this.graphics.position.x = this.count;

			if(this.count > this.gameWidth){
				this.count = -20;
			}else {
				this.count++;
			}
			
			

		}
	};

	return HelloWorld; 
});