(function(){

    'use-strict';
  
    function TasksService($http) {
        this.getAllTasks = getAllTasks;
        this.createTask = createTask;

        function getAllTasks () {
            return $http.get('/tasks');
        }

        function createTask (data) {
            let req = {
                url: '/tasks',
                method: 'POST',
                data: data
            }
            return $http(req);
        }
    }
  
    angular
      .module('pmRailsApp')
      .service('TasksService', ['$http', TasksService])
  }())
  