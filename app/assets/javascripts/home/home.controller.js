(function(){
    'use-strict'
  
    function HomeController(AuthService, $location){
      var vm = this;
      vm.currentUser;

      vm.loginForm = {
        email: '',
        password: ''
      };

      vm.login = function () {
        AuthService.login(vm.loginForm).then(function(response) {
          console.log('User logged in successfully.');
          console.log(response);
          $location.path('/home');
        }).catch(function(error) {
          console.log('There was an error on login.')
          console.log(error);
        });
      }
    }
  
    angular
      .module('pmRailsApp')
      .controller('HomeController', ['AuthService', '$location', HomeController])
  }())