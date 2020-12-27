/*
 * @Author: wynn-w
 * @Description: 
 * @Date: 2020-12-09 14:47:17
 * @LastEditTime: 2020-12-27 11:53:57
 * @LastEditors: wynn-w
 */
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],
    client: {
      captureConsole: true,
      chai: {
        includeStack: true
      }
    },
    // client: {
    //   captureConsole: true,
    //   mocha: {
    //     bail: true
    //   }
    // }

    // list of files / patterns to load in the browser
    files: [
      'dist/*.test.css',
      'dist/*.test.js',
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'], //'Chrome_without_security'/'Chrome'

    customLaunchers: {
      // Chrome_without_security: {
      //   base: 'Chrome',
      //   flags: ['--disable-web-security', '--disable-site-isolation-trials']
      // },
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox',
          // '--user-data-dir=/tmp/chrome-test-profile',
          '--disable-web-security']
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    detached: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}