(function(){

    'use-strict';
  
    function TaskTimesService($http) {
        this.getAllTaskTimes = getAllTaskTimes;
        this.createTaskTimes = createTaskTimes;
        this.updateTaskTime = updateTaskTime;

        function getAllTaskTimes (taskId) {
            console.log(taskId);
            let req = {
                url: `/tasks/${taskId}/task_times`,
                method: 'GET',
                params: {'taskId': taskId}
            }
            return $http(req);
        }

        function createTaskTimes (taskId, data) {
            data.taskId = taskId;
            let req = {
                url: `/tasks/${taskId}/task_times`,
                method: 'POST',
                data: data
            }
            return $http(req);
        }

        function updateTaskTime (taskTime) {
            let req = {
                url: `/tasks/${taskTime.task_id}/task_times/${taskTime.id}`,
                method: 'PATCH',
                data: taskTime
            }
            return $http(req);
        }
    }
  
    angular
      .module('pmRailsApp')
      .service('TaskTimesService', ['$http', TaskTimesService])
  }())
  