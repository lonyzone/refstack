module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      // Angular libraries.
      'app/assets/lib/angular/angular.js',
      'app/assets/lib/angular-ui-router/release/angular-ui-router.js',
      'app/assets/lib/angular-bootstrap/ui-bootstrap.min.js',
      'app/assets/lib/angular-mocks/angular-mocks.js',

      // JS files.
      'app/app.js',
      'app/components/**/*.js',
      'app/shared/*.js',
      'app/shared/**/*.js',
      'app/assets/js/*.js',

      // Test Specs.
      'tests/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
