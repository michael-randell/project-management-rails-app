(function() {
    'use-strict';

    angular
      .module('pmRailsApp', ['ui.router', 'templates', 'naif.base64', 'ng-rails-csrf', 'Devise', 'ng-token-auth', 'ipCookie', 'angular.filter', 'ngMessages', 'ngAnimate', 'ngSanitize', 'ngToast', 'ui.bootstrap'])
      .config(function($httpProvider, $compileProvider, $qProvider, ngToastProvider){
        $httpProvider.useApplyAsync(true);
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        $compileProvider.debugInfoEnabled(false);
        $qProvider.errorOnUnhandledRejections(false);
        ngToastProvider.configure({
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          dismissOnTimeout: true,
          timeout: 4000,
          dismissButton: true,
          additionalClasses: 'toast-el',
          newestOnTop: true
        });
      });
}())