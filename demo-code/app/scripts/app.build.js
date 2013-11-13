require.config({
	generateSourceMaps:true,
	paths: {
		jquery: '../bower_components/jquery/jquery',
		underscore: '../bower_components/underscore/underscore',
		pixi: './vendor/pixi.js/bin/pixi.dev', //dev branch with filters
		//pixi: '../bower_components/pixi/bin/pixi.dev',
		domReady: '../bower_components/requirejs-domready/domReady',
		image: '../bower_components/requirejs-plugins/src/image'
	},
	shim: {
		pixi: {
			exports: 'PIXI'
		},
		underscore: {
			exports: '_'
		}
	},
	packages: [
		'toxi', {
			name: 'toxi',
			main: 'toxi',
			location: '../bower_components/toxiclibsjs/lib'
		}
	]
});