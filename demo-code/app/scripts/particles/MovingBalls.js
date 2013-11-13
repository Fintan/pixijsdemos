define(function (require) {
	'use strict';
	var _ = require('underscore');
	var Particle = require('./Particle');
	var PMath = require('utils/PMath');

	var MovingBalls = function() {};

	MovingBalls.prototype = {

		setup: function() {

			this.balls = [];
		
			for(var i = 0; i <10; i++) {
				
				var b = new Particle();
				
				b.setPos(PMath.random(0, this.gameWidth), PMath.random(0, this.gameHeight));
				b.setVel(PMath.random(-1, 1), PMath.random(-1, 1));
				this.balls.push(b);
				this.gameStage.addChild(b.view);
				
			}

		},

		update: function() {

			_.each(this.balls, function(ball) {
				ball.update();
			});

		}
	};

	return MovingBalls; 
});