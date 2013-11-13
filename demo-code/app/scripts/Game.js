define(function (require) {
	'use strict';
	var PIXI = require('pixi');
	var _ = require('underscore');
	var InputManager = require('utils/InputManager');
	
	var Game = function(width, height) {
		
		this.init(width, height);

	};

	Game.prototype = {

		init: function(width, height) {

			// create an new instance of a pixi stage
			this.stage = new PIXI.Stage(0x000000);

			// create a renderer instance.
			this.renderer = PIXI.autoDetectRenderer(width, height, void 0, false, true);
			//this.renderer = new PIXI.CanvasRenderer(this.gameWidth, this.gameHeight);
			
			//properties to add to game objects
			this.options = {
				math: {},
				input: new InputManager(),
				gameWidth: width,
				gameHeight: height,
				gameStage: this.stage,
				renderer: this.renderer
			};

			// add the renderer view element to the DOM
			document.body.appendChild(this.renderer.view);

			this.gameObjects = [];

			this.stage.interactive = true;

		},

		start: function() {

			requestAnimFrame(_.bind(this.update, window, this) );

		},

		addGameObject: function(gameObject) {

			_.extend(gameObject, this.options);

			gameObject.setup();
			
			this.gameObjects.push(gameObject);

		},

		update: function(thiz) {

			requestAnimFrame(_.bind(thiz.update, window, thiz) );
			
			//call update on game objects here
			_.each(thiz.gameObjects, function(gameObject) {
				gameObject.update(thiz.stage);
			}, this);

			// render the stage   
			thiz.renderer.render(thiz.stage);
		}

	};

	return Game; 
});