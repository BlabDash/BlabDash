'use strict';

/**
 * @ngdoc function
 * @name blabDashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blabDashApp
 */
angular.module('blabDashApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray) {
  	$scope.today = $firebaseArray(Ref.child('summary').limitToLast(1));
  });
