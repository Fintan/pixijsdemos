define(function (require) {
	'use strict';
	var Game = require('Game');
	//var HelloWorld = require('hello/HelloWorld');
	//var MovingObject = require('linear/MovingObject2');
	//var MovingConcenticObject = require('concentric/MovingObject5');
	//var PixelDataDemo = require('pixeldatademo/PixelDataDemo');
	//var Pulsate = require('pulsate/Pulsate');
	var MousePosition = require('./mousepos/MousePosition');
	//var MovingBalls = require('particles/MovingBalls');
	//var PerlinLine = require('perlin/PerlinLine');
	//var Noise2d = require('perlin/Noise2d');
	//var CanonSim = require('canon/CanonSim');
	//var TextureDemo = require('texturedemo/TextureDemo');

	var App = function(){
		
		var game = new Game(800, 600);
		//game.addGameObject(new HelloWorld());
		//game.addGameObject(new MovingObject());
		//game.addGameObject(new MovingConcenticObject());
		//game.addGameObject(new PixelDataDemo());
		//game.addGameObject(new Pulsate());
		//
		game.addGameObject(new MousePosition());
		//game.addGameObject(new PerlinLine());
		//game.addGameObject(new Noise2d());
		//game.addGameObject(new MovingBalls());
		//game.addGameObject(new CanonSim());
		//game.addGameObject(new TextureDemo());
		game.start();

	};

	return App;
});