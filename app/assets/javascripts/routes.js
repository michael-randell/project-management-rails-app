(function() {
    'use-strict';

    angular
      .module('pmRailsApp')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/home',
           templateUrl: 'home/home.html',
           controller: 'HomeController as $ctrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginController as $ctrl'
          })
          .state('register', {
            url: '/register',
            templateUrl: 'register/register.html',
            controller: 'RegisterController as $ctrl'
          })
          .state('projects', {
            url: '/projects',
            templateUrl: 'projects/projects.html',
            controller: 'ProjectsController as $ctrl'
          })
          .state('tasks', {
            url: '/tasks',
            templateUrl: 'tasks/tasks.html',
            controller: 'TasksController as $ctrl'
          })
          .state('tasktimes', {
            url: '/tasktimes',
            templateUrl: 'tasktimes/tasktimes.html',
            controller: 'TaskTimesController as $ctrl'
          })
          .state('tasksTaskTimes', {
            url: '/tasks/:id/taskTimes',
            templateUrl: 'tasktimes/tasktimes.html',
            controller: 'TaskTimesController as $ctrl'
          })
          $urlRouterProvider.otherwise('/login')
      }])

      function authenticate($q, $state, $timeout, AuthService, ToastService) {

        //,
        //    resolve: {
        //      authenticate: authenticate
        //    }
        
        if (AuthService.isAuthenticated()) {
          // Resolve the promise successfully
          return $q.when()
        } else {
          // The next bit of code is asynchronously tricky.
  
          $timeout(function() {
            // This code runs after the authentication promise has been rejected.
            // Go to the log-in page
            $state.go('login')
            ToastService.displayErrorMsg('Sorry, ACCESS DENIED.')
          })
  
          // Reject the authentication promise to prevent the state from loading
          return $q.reject()
        }
      }
}())
