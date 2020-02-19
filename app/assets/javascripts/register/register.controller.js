(function () {
  
    function RegisterController(AuthService, $location, ToastService, $scope){
      var vm = this;
      vm.currentUser;

      vm.registerForm = {
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
      };

      //vm.roles = [{role: 'patient'}, {role: 'doctor'}];

      vm.$onInit = function () {
        console.log(AuthService.isAuthenticated());
      }

      vm.register = function () {
        //vm.registerForm.admin = addRoleToPayload(vm.registerForm.role);
        AuthService.register(vm.registerForm).then(function() {
          ToastService.displaySuccessMsg('Your account has been registered!');
          $location.path('/home');
        }).catch(function(error) { 
          ToastService.displayErrorMsg(vm.formatDeviseErrors(error.data.errors));
        });
      }

      function addRoleToPayload (role) {
        //if (role === 'patient') {
        //  return false;
        //} else if (role === 'doctor') {
        //  return true;
        //}
      }

      vm.formatDeviseErrors = function (errors) {
        var formattedErrors = '';
        var formattedErrorsArr = [];
        for (var key in errors){
          formattedErrorsArr.push(key.charAt(0).toUpperCase() + key.slice(1) + ' ' + errors[key]);
        }

        for (var i = 0; i < formattedErrorsArr.length; i++) {
          formattedErrors += (i + 1).toString() + '. ' + formattedErrorsArr[i] + ' ';
        }

        return formattedErrors;
      };
    }
  
    angular
      .module('pmRailsApp')
      .controller('RegisterController', ['AuthService', '$location', 'ToastService', RegisterController])
}());