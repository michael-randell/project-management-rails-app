(function(){
  
    function TasksController(AuthService, TasksService, ToastService){
      var ctrl = this;
      ctrl.currentUser;
 
      ctrl.$onInit = function () {
        AuthService.getCurrentUser().then(function (response) {
            ctrl.currentUser = response;
        }).catch(function() {
            ctrl.currentUser = null;
        });
        ctrl.initTasks();
      }
      
      ctrl.initTasks = function () {
        TasksService.getAllTasks().then(function (response) {
            ToastService.displaySuccessMsg(response.data.message);
            ctrl.tasks = response.data.data;
        }).catch(function (error) {
            ctrl.tasks = {};
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
      .controller('TasksController', ['AuthService', 'TasksService', 'ToastService', TasksController])
  }())