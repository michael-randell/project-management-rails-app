(function(){
  
    function createProject(){
      return {
        templateUrl: 'directives/create-project/create-project.html',
        controller: CreateProjectController,
        controllerAs: '$directiveCtrl'
      }
  
      function CreateProjectController(ProjectsService, CustomersService, $rootScope){
        var ctrl = this;

        ctrl.projectForm = {
            name: ''
        }
        
        ctrl.$onInit = function () {
            ctrl.getCustomersData();
        }

        ctrl.getCustomersData = function () {
          CustomersService.getAllCustomers().then(function(response) {
            ctrl.customerData = response.data.data;
          }).catch(function(error) {
            console.log('Error retrieving customer data');
          })
        }

        ctrl.submit = function () {
            ProjectsService.createProject(ctrl.projectForm).then(function (response) {
                $rootScope.$broadcast('projectDataUpdate', {data: response.data.data});
                resetForm();
            }).catch(function (error) {
                console.log('Project created error');
                console.log(error);
            });
        }

        function resetForm () {
          ctrl.projectForm = {
            name: ''
          }
        }
      }
    }
  
    angular
      .module('pmRailsApp')
      .directive('createProject', ['ProjectsService', 'CustomersService', '$rootScope', createProject])
  }())