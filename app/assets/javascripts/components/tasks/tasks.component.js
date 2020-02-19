(function() {
    'use strict';
  
    var tasks = {
      templateUrl: 'components/tasks/tasks.html',
      restrict: 'E',
      bindings: {
          data: '<'
      },
      controller: function(AuthService, $scope, $location) {
        var vm = this;
    
        vm.$onInit = function () {
          AuthService.getCurrentUser().then(function (response) {
            vm.currentUser = response;
          }).catch(function(error) {
            vm.currentUser = null;
          });
          vm.tasks = this.data;
        }

        vm.addTaskTime = function (taskId) {
          $location.url(`/tasks/${taskId}/taskTimes`);
        }

        $scope.$on('taskDataUpdate', function (event, data) {
          vm.tasks.push(data.data);
        });
      },
      controllerAs: '$ctrl'
    }
  
    angular
      .module('pmRailsApp')
      .component('tasks', tasks)
  }())
  