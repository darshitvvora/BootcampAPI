'use strict';

angular.module('apiApp', ['apiApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
