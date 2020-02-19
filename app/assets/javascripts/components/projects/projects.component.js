(function() {
    'use strict';
  
    var projects = {
      templateUrl: 'components/projects/projects.html',
      restrict: 'E',
      bindings: {
          data: '<'
      },
      controller: function(AuthService, $scope) {
        var vm = this;
    
        vm.$onInit = function () {
          AuthService.getCurrentUser().then(function (response) {
            vm.currentUser = response;
          }).catch(function(error) {
            vm.currentUser = null;
          });
          vm.projects = this.data;
        }

        $scope.$on('projectDataUpdate', function (event, data) {
          vm.projects.push(data.data);
        });
      },
      controllerAs: '$ctrl'
    }
  
    angular
      .module('pmRailsApp')
      .component('projects', projects)
  }())
  