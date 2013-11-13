//http://davidthomasbernal.com/blog/2012/07/21/handling-input-in-a-js-game/
define(function (require) {
	'use strict';
	var _ = require('underscore');

	/**
	 * Inherit prototype properties
	 * Sets up the inheritance chain so that the second argument's prototype is the first argument. 
	 * This is from backbone.js, see their annotated source for more info.
	 */
	_.mixin({
		'inherits': function(parent, protoProps, staticProps) {
			var child;

	        var Ctor = function(){};
			if (protoProps && protoProps.hasOwnProperty('constructor')) {
				child = protoProps.constructor;
			} else {
				child = function(){ parent.apply(this, arguments); };
			}

			_.extend(child, parent);

			Ctor.prototype = parent.prototype;
			child.prototype = new Ctor();

			if (protoProps) { _.extend(child.prototype, protoProps); }

			if (staticProps) { _.extend(child, staticProps); }

			child.prototype.constructor = child;

			child.__super__ = parent.prototype;

			return child;
	    }
	});
	
	var InputManager = _.inherits(function() {}, {
		
		// keycodes from jQuery UI: 
		// https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.core.js
		// thanks guys!
		'Keys': {
			'BACKSPACE': 8,
			'COMMA': 188,
			'DELETE': 46,
			'DOWN': 40,
			'END': 35,
			'ENTER': 13,
			'ESCAPE': 27,
			'HOME': 36,
			'LEFT': 37,
			'NUMPAD_ADD': 107,
			'NUMPAD_DECIMAL': 110,
			'NUMPAD_DIVIDE': 111,
			'NUMPAD_ENTER': 108,
			'NUMPAD_MULTIPLY': 106,
			'NUMPAD_SUBTRACT': 109,
			'PAGE_DOWN': 34,
			'PAGE_UP': 33,
			'PERIOD': 190,
			'RIGHT': 39,
			'SPACE': 32,
			'TAB': 9,
			'UP': 38
		},

		'_keysDown': {},

		'constructor': function() {
			window.addEventListener('keydown', _.bind(this._onkeydown, this));
			window.addEventListener('keyup', _.bind(this._onkeyup, this));
		},

		'_onkeydown': function(ev) {
			// ev is the event object, and it has the "which" member,
			// that says which key is pressed.
			this._keysDown[ev.which] = true;

		},

		'_onkeyup': function(ev) {

			this._keysDown[ev.which] = false;

		},

		'keyDown': function(key) {
			// simply returning this._keysDown[key] would give "undefined"
			// instead of false if the key was never pressed. Adding two 
			// "!"s makes sure that it's always either true or false
			return !!this._keysDown[key];

		}
	});

	return InputManager; 
});