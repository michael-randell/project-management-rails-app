(function() {
    'use strict';
  
    var navigation = {
      templateUrl: 'components/navigation/navigation.html',
      restrict: 'E',
      scope: {},
      controller: function(AuthService, $scope, $location) {
        var ctrl = this;
  
        ctrl.$onInit = function () {
          AuthService.getCurrentUser().then(function (response) {
            ctrl.currentUser = response;
          }).catch(function(error) {
            console.log(error);
            ctrl.currentUser = null;
          });
        }
        
        $scope.$on('devise:login', function (e, user){
          ctrl.currentUser = user;
        });
  
        $scope.$on('devise:logout', function (e, user){
          ctrl.currentUser = user;
        });
  
        $scope.$on('devise:new-registration', function(event, user) {
          ctrl.currentUser = user;
        });
  
        ctrl.logout = function () {
          AuthService.logout().then(function(response) {
            console.log('User logged out successfully.');
            console.log(response);
            $location.path('/login');
          }).catch(function(error) {
            console.log('There was an error on logout.')
            console.log(error);
          });
        }
      }
    }
  
    angular
      .module('pmRailsApp')
      .component('navigation', navigation)
  }())
  