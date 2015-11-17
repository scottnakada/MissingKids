'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.myKids', {
                url: '/myKids',
                views: {
                    'menuContent': {
                        templateUrl: "myKids/myKids.html",
                        controller: 'MyKidsCtrl'
                    }
                }
            }
        );
    }
);
