(function(){

  'use-strict';

  function AuthService(Auth){
      this.login = login;
      this.logout = logout;
      this.register = register;
      this.getCurrentUser = getCurrentUser;
      this.isAuthenticated = isAuthenticated;

      var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
      };
      
      function login(loginForm) {
        return Auth.login(loginForm, config);
      }

      function logout() {
        return Auth.logout(config);
      }

      function register(registerForm) {
        return Auth.register(registerForm, config)
      }

      function getCurrentUser() {
        return Auth.currentUser();
      }

      function isAuthenticated() {
        return Auth.isAuthenticated();
      }
  }

  angular
    .module('pmRailsApp')
    .service('AuthService', ['Auth', AuthService])
}())
