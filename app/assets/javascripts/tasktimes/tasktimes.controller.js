(function(){
  
    function TaskTimesController(AuthService, TaskTimesService, ToastService, $stateParams){
      var ctrl = this;
      ctrl.currentUser;
 
      ctrl.$onInit = function () {
        AuthService.getCurrentUser().then(function (response) {
            ctrl.currentUser = response;
        }).catch(function() {
            ctrl.currentUser = null;
        });
        ctrl.initTaskTimes();
      }
      
      ctrl.initTaskTimes = function () {
        TaskTimesService.getAllTaskTimes($stateParams.id).then(function (response) {
            ToastService.displaySuccessMsg(response.data.message);
            ctrl.taskTimes = response.data.data;
        }).catch(function (error) {
            ctrl.taskTimes = {};
            if (error && error.data && error.data.errors) {
              error.data.errors.forEach(function (error) {
                ToastService.displayErrorMsg(error);
              });
            }   
        }) 
      }
    }
  
    angular
      .module('pmRailsApp')
      .controller('TaskTimesController', ['AuthService', 'TaskTimesService', 'ToastService', '$stateParams', TaskTimesController])
  }())