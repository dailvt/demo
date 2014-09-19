var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify(
[   '../hhdRails/app/assets/javascripts/jquery.js',
	'../hhdRails/app/assets/javascripts/jquery-ui.js',
	'../hhdRails/app/assets/javascripts/frontend/jquery-migrate-1.2.1.js',
	'../hhdRails/app/assets/javascripts/frontend/jquery.mousewheel.js',
	'../hhdRails/app/assets/javascripts/frontend/jquery.mobile.customized.min.js',
	'../hhdRails/app/assets/javascripts/frontend/jquery.easing.1.3.js',
	'../hhdRails/app/assets/javascripts/frontend/camera.js',
	'../hhdRails/app/assets/javascripts/frontend/jquery.kwicks.js',			
	'../hhdRails/app/assets/javascripts/frontend/video.js',
	'../hhdRails/app/assets/javascripts/frontend/main.js'
],
 {
	mangle: true,
	outSourceMap: "dest/out.js.map"
});
// console.log(result.code);
fs.writeFileSync('dest/main.min.js', result.code);
fs.writeFileSync('dest/main.js.map', result.map);