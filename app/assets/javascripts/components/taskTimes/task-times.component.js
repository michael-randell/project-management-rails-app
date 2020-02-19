(function() {
    'use strict';
  
    var taskTimes = {
      templateUrl: 'components/taskTimes/task-times.html',
      restrict: 'E',
      bindings: {
          data: '<'
      },
      controller: function(AuthService, $scope, TaskTimesService, $location) {
        var vm = this;
    
        vm.$onInit = function () {
          AuthService.getCurrentUser().then(function (response) {
            vm.currentUser = response;
          }).catch(function(error) {
            vm.currentUser = null;
          });
          vm.taskTimes = vm.processInitData(this.data);
        };

        vm.updateTaskTime = function (taskTime) {
          TaskTimesService.updateTaskTime(taskTime).then(function (response) {
            console.log('Task time update successful');
            console.log(response);
          }).catch(function (error) {
            console.log('Task time update error');
            console.log(error);
          });
        };

        vm.processInitData = function (taskTimes) {
          taskTimes.forEach(function (taskTime) {
            if (taskTime.time_started) {
              taskTime.time_started = new Date(taskTime.time_started);
            }

            if (taskTime.date_completed) {
              taskTime.date_completed = new Date(taskTime.date_completed);
            }
          });
          return taskTimes;
        }

        $scope.$on('taskTimesDataUpdate', function (event, data) {
          vm.taskTimes.push(data.data);
        });
      },
      controllerAs: '$ctrl'
    }
  
    angular
      .module('pmRailsApp')
      .component('taskTimes', taskTimes)
  }())
  