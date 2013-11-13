define(function (require) {
	'use strict';
	var PIXI = require('pixi');

	var Pulsate = function() {};

	Pulsate.prototype = {

		setup: function() {

			this.count = 1;
			this.radius = 20;

			this.graphics = new PIXI.Graphics();
			this.graphics.position.x = this.gameWidth/2;
			this.graphics.position.y = this.gameHeight/2;

			this.gameStage.addChild(this.graphics);

		},

		update: function() {

			this.radius = this.radius + Math.sin( this.count/4 );
			
			this.graphics.clear();
			this.graphics.beginFill(0x00FF00);
			this.graphics.drawCircle(0, 0, this.radius);
			this.graphics.endFill();
		
			this.count++;

		}
	};

	return Pulsate; 
});