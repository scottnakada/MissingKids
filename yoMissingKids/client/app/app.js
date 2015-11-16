'use strict';

angular.module('yoMissingKidsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'firebase',
    'toaster',
    'angularMoment'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://hopenetwork.firebaseio.com/')

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/home');

        $locationProvider.html5Mode(true);
    });
