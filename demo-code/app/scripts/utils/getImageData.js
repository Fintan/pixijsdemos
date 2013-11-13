define(function (require) {
	'use strict';
	
	return (function() {

		return function(imageEl) {

			//var canvas = document.createElement('canvas'); 
			var canvas = document.getElementById('easeljsCanvas'); 
			var ctx = canvas.getContext('2d');

			//var img = new Image();
			imageEl.onload = function(){
				console.log('loaded!');
				ctx.drawImage(imageEl, imageEl.width, imageEl.height);

			};
			//img.src = "img/leaf.png";

			//ctx.drawImage(document.images[0], imageEl.width, imageEl.height);
			//ctx.drawImage(imageEl, imageEl.width, imageEl.height);
	/*
			ctx.beginPath();
	    ctx.moveTo(30,96);
	    ctx.lineTo(70,66);
	    ctx.lineTo(103,76);
	    ctx.lineTo(170,15);
	    ctx.stroke();
	*/		
			//return ctx.getImageData(0,0, imageEl.width, imageEl.height);

		};
		
	}());

});