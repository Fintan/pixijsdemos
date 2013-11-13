define(function (require) {
	'use strict';
	var PIXI = require('pixi');

	var TextureDemo = function() {};

	TextureDemo.prototype = {

		setup: function() {

			// create two render textures.. these dynamic textures will be used to draw the scene into itself
			this.renderTexture = new PIXI.RenderTexture(this.gameWidth, this.gameHeight);
			this.renderTexture2 = new PIXI.RenderTexture(this.gameWidth, this.gameHeight);
			this.currentTexture = this.renderTexture;

			// create a new sprite that uses the render texture we created above
			this.outputSprite = new PIXI.Sprite(this.currentTexture);
			
			// align the sprite
			this.outputSprite.position.x = this.gameWidth/2;
			this.outputSprite.position.y = this.gameHeight/2;
			this.outputSprite.anchor.x = 0.5;
			this.outputSprite.anchor.y = 0.5;
			
			// add to stage
			this.gameStage.addChild(this.outputSprite);
			
			this.stuffContainer = new PIXI.DisplayObjectContainer();
			this.stuffContainer.position.x = this.gameWidth/2;
			this.stuffContainer.position.y = this.gameHeight/2;
			
			this.gameStage.addChild(this.stuffContainer);

			this.item = PIXI.Sprite.fromImage('img/blur2.png');
			
			this.item.anchor.x = 0.5;
			this.item.anchor.y = 0.5;
			
			this.stuffContainer.addChild(this.item);


			this.count = 1;
			this.radius = 270;

			this.pt = new PIXI.Point(0,0);
		},

		update: function() {

			this.item.position.x = this.radius * Math.sin( this.count );
			this.item.position.y = this.radius * Math.cos( this.count );

			//this.item.scale.x = this.item.scale.y = Math.sin( this.count );
			this.count+=0.07;

			//this.radius += 1; 

			// swap the buffers.. 
			var temp = this.renderTexture;
			this.renderTexture = this.renderTexture2;
			this.renderTexture2 = temp;
			
			// set the new texture
			this.outputSprite.setTexture(this.renderTexture);
			
			// render the stage to the texture
			// the true clears the texture before content is rendered
			this.renderTexture2.render(this.gameStage, this.pt, true);

		}

	};

	return TextureDemo; 
});