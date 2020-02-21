(function(){

    'use-strict'
  
    function createTaskTimes(){
      return {
        templateUrl: 'directives/create-task-times/create-task-times.html',
        controller: CreateTaskTimesController,
        controllerAs: '$directiveCtrl'
      }
  
      function CreateTaskTimesController(TaskTimesService, TaskTimesService, $rootScope, $stateParams){
        var ctrl = this;

        ctrl.taskTimesForm = {
          name: '',
          date_completed: '',
          time_started: ''
        }
        
        ctrl.$onInit = function () {
            console.log('HERE');
            ctrl.getTaskTimesData();
        }

        ctrl.getTaskTimesData = function () {
          TaskTimesService.getAllTaskTimes($stateParams.id).then(function(response) {
            ctrl.taskTimesData = response.data.data;
          }).catch(function(error) {
            console.log('Error retrieving taskTimes data');
          })
        }

        ctrl.submit = function () {
            TaskTimesService.createTaskTimes($stateParams.id, ctrl.taskTimesForm).then(function (response) {
                $rootScope.$broadcast('taskTimesDataUpdate', {data: response.data.data});
                resetForm();
            }).catch(function (error) {
                console.log('TaskTimes created error');
                console.log(error);
            });
        }

        function resetForm () {
          ctrl.taskTimesForm = {
            name: ''
          }
        }
      }
    }
  
    angular
      .module('pmRailsApp')
      .directive('createTaskTimes', ['TaskTimesService', 'CustomersService', '$rootScope', '$stateParams', createTaskTimes])
  }())