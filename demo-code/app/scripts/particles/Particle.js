define(function (require) {
	'use strict';
	var Ball = require('./Ball');

	var Particle = function(view) {
		this.init(view);
	};

	Particle.prototype = {
		init: function(view) {

			this.view = view || new Ball(23, 0xff00ff, 2).render();

			this.xVel = 0; 
			this.yVel = 0;

			this.drag = 1; 
			this.gravity = 0; 
			this.shrink = 1; 
			this.fade = 0; 
			this.spin = 0;

		},

		setView: function(view) {
	
			this.view = view;

		},

		setVel: function(xvel, yvel) {
		
			this.xVel = xvel; 
			this.yVel = yvel; 
			
		},

		setPos: function(x, y) {
		
			this.view.position.x = x; 
			this.view.position.y = y;
			
		},

		update: function() {
		
			if(this.view){
				
				this.yVel += this.gravity; 
				
				// add the velocity to the clip's position
				this.view.position.x += this.xVel; 
				this.view.position.y += this.yVel;
				

				// apply drag
				this.xVel *= this.drag; 
				this.yVel *= this.drag; 
			
				//this.view.scale.x *= this.shrink;
				//this.view.scale.y *= this.shrink; 
			
				this.view.alpha -= this.fade; 
			
				//this.view.rotation += this.spin; 

				this.checkBoundaries();
			
			}
			
		},

		checkBoundaries: function() {
		
			var left = 0;
			var right = 800;
			var top = 0;
			var bottom = 600;

			var clipWidth = 46;
			var clipHeight = 46;
			
			if (this.view.position.x - clipWidth / 2 > right) {
				
				this.view.position.x = left - clipWidth / 2;
			}
			else if (this.view.position.x + clipWidth / 2 < left) {
				
				this.view.position.x = right + clipWidth / 2;
			}
			
			if (this.view.position.y - clipHeight / 2 > bottom) {
				
				this.view.position.y = top - clipHeight / 2;
			}
			else if (this.view.position.y < top - clipHeight / 2) {
				
				this.view.position.y = bottom + clipHeight / 2;
			}
			
		}


	};

	return Particle; 
});