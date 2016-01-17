'use strict';
/**
 * @ngdoc overview
 * @name blabDashApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('blabDashApp')

.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

        .when('/stats', {
                templateUrl: 'views/stats.html',
                controller: 'StatsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
            });
        }


  }]);