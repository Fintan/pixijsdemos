define(function (require) {
	'use strict';
	var CanonView = require('./CanonView');

	var CanonSim = function() {};

	CanonSim.prototype = {

		setup: function() {

			this.canonView = new CanonView();
		
			this.gameStage.addChild(this.canonView.render());
			
			this.canonView.setAngle(1.5);
			
			this.canonView.position.x = 40;
			this.canonView.position.y = this.gameHeight - 100;

		},

		removeListeners: function() {

			$('body').off('keyup');

		},

		update: function() {

			if(this.input.keyDown(39)) {

				this.canonView.updateAngle(0.1);

			}else if(this.input.keyDown(37)) {
				
				this.canonView.updateAngle(-0.1);
				
			}

		}
	};

	return CanonSim; 
});