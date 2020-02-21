(function(){
    'use-strict'
  
    function LoginController(AuthService, $location, ToastService){
      var vm = this;
      vm.currentUser;

      vm.loginForm = {
        email: '',
        password: ''
      };

      vm.$onInit = function () {
        console.log(AuthService.isAuthenticated());
      }

      vm.login = function () {
        AuthService.login(vm.loginForm).then(function(response) {
          ToastService.displaySuccessMsg('Your account is logged in!');
          $location.path('/home');
        }).catch(function(error) {
          ToastService.displayErrorMsg(error.data.error);
        });
      } 

    }
  
    angular
      .module('pmRailsApp')
      .controller('LoginController', ['AuthService', '$location', 'ToastService', LoginController])
  }())