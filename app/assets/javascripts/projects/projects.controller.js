(function(){
  
    function ProjectsController(AuthService, ProjectsService, ToastService){
      var ctrl = this;
      ctrl.currentUser;
 
      ctrl.$onInit = function () {
        AuthService.getCurrentUser().then(function (response) {
            ctrl.currentUser = response;
        }).catch(function() {
            ctrl.currentUser = null;
        });
        ctrl.initProjects();
      }
      
      ctrl.initProjects = function () {
        ProjectsService.getAllProjects().then(function (response) {
            ToastService.displaySuccessMsg(response.data.message);
            ctrl.projects = response.data.data;
        }).catch(function (error) {
            ctrl.projects = {};
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
      .controller('ProjectsController', ['AuthService', 'ProjectsService', 'ToastService', ProjectsController])
  }())