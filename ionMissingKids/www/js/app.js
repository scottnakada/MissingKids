// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ionMissingKidsApp', [
    'ionic',
    'toaster',
    'ngAnimate',
    'firebase',
    'ngGeolocation',
    'ngMap'
])

    // Define the Firebase database
    .constant('FURL', 'https://hopenetwork.firebaseio.com/')

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'menu/menu.html',
                controller: 'MenuCtrl'
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });

branch.link({
    channel: 'sms',
    feature: 'share',
    data: {
        'article_id': '1234',
        '$desktop_url': 'http://www.KidsHopeNetwork.co',
        '$og_title': 'Check out this article!',
    }
}, function (err, link) {
    console.log(err, link);
});

