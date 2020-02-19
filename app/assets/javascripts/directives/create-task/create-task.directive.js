(function(){
  
    function createTask(){
      return {
        templateUrl: 'directives/create-task/create-task.html',
        controller: CreateTaskController,
        controllerAs: '$directiveCtrl'
      }
  
      function CreateTaskController(TasksService, ProjectsService, $rootScope){
        var ctrl = this;

        ctrl.taskForm = {
            name: ''
        }
        
        ctrl.$onInit = function () {
            ctrl.getProjectsData();
        }

        ctrl.getProjectsData = function () {
            ProjectsService.getAllProjects().then(function(response) {
              ctrl.projectsData = response.data.data;
            }).catch(function(error) {
              console.log('Error retrieving projects data');
            })
          }

        ctrl.submit = function () {
            TasksService.createTask(ctrl.taskForm).then(function (response) {
                $rootScope.$broadcast('taskDataUpdate', {data: response.data.data});
                resetForm();
            }).catch(function (error) {
                console.log('Task created error');
                console.log(error);
            });
        }

        function resetForm () {
          ctrl.taskForm = {
            name: '',
            description: ''
          }
        }
      }
    }
  
    angular
      .module('pmRailsApp')
      .directive('createTask', ['TasksService', 'ProjectsService', '$rootScope', createTask])
  }())