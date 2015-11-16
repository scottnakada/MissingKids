'use strict';

angular.module('ionMissingKidsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.admin', {
                url: '/admin',
                views: {
                    'menuContent': {
                        templateUrl: "userAuth/admin/admin.html",
                        controller: 'AdminCtrl'
                    }
                }
            });
    });
