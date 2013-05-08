basePath = '';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  '_components/angular/angular.js',
  '_components/angular-mocks/angular-mocks.js',
  'app/scripts/**/*.js',
  'app/test/unit/**/*Spec.js'
];

reporters       = [ 'dots' ];       // 'dots', 'progress', 'junit'
port            = 9876;
runnerPort      = 9100;
colors          = true;
logLevel        = LOG_INFO;         // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
autoWatch       = false;            // Watch for file changes
browsers        = [ 'PhantomJS' ];  // Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows)
captureTimeout  = 120 * 1000;
singleRun       = true;             // Exit upon completion