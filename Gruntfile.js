module.exports = function(grunt) {
	"use strict";

	grunt.initConfig( {

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				},
			},

			System: ['Gruntfile.js'],
			
			Wizard: [ 
				'src/js/wizard.js',
			],
		},
		
		jsonlint: {
			pkg: {
				src: [ "package.json" ]
			}
		},

		
		copy: {
			Wizard: {
				files: [
					{src: ['src/js/wizard.js'], dest: 'dist/wizard.js'},
				],
			},
		},
		uglify: {
			Wizard: {
				options: {
					sourceMap: true,
				},
				files: {
					'dist/wizard.min.js'      : ['dist/wizard.js'],
				}
			}
		},

		
		
		compass: {
			Wizard :{
				options: { 
					sassDir: 'src/scss',
					cssDir: 'dist',
					specify: ['src/scss/wizard.scss'],
					environment: 'production', //development or production
					outputStyle: 'compressed', //nested, expanded, compact, compressed
					sourcemap:true,
					//watch:true,
					//force:true,
				}
			}
		},

		
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask( "lint", [ "jshint", "jsonlint", "copy", "uglify" ] );
	
	grunt.registerTask('default', ["lint", "compass"]);
};