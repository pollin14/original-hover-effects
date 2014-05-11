module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['src/css/*.css', '!src/css/<%= pkg.name %>.css'],
				dest: 'dist/css/<%= pkg.name %>.css'
			}
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			minify: {
				expand: true,
				src: ['dist/css/<%= pkg.name %>.css'],
				dest: '',
				ext: '.min.css'
			}
		},
		copy: {
			main:{
				expand: true,
    			cwd: 'src/css/images/', // Con esto se evita copiar la estructura de directorio fuente.
    			src: '*',
				dest: 'dist/css/images/',
			}
		}
	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['concat','cssmin','copy']);

};