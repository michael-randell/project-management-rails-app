(function(){

    'use-strict';
  
    function CustomersService($http) {
        this.getAllCustomers = getAllCustomers;
        this.createProject = createProject;

        function getAllCustomers () {
            return $http.get('/customers');
        }

        function createProject (data) {
            let req = {
                url: '/projects',
                method: 'POST',
                data: data
            }
            return $http(req);
        }
    }
  
    angular
      .module('pmRailsApp')
      .service('CustomersService', ['$http', CustomersService])
  }())
  