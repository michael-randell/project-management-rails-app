(function(){

    'use-strict';
  
    function ProjectsService($http) {
        this.getAllProjects = getAllProjects;
        this.createProject = createProject;

        function getAllProjects () {
            return $http.get('/projects');
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
      .service('ProjectsService', ['$http', ProjectsService])
  }())
  