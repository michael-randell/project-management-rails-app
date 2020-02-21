(function(){

    'use-strict';
  
    function ToastService(ngToast){
        this.displaySuccessMsg = displaySuccessMsg;
        this.displayErrorMsg = displayErrorMsg

        function displaySuccessMsg (message) {
            ngToast.create({
              className: 'success',
              content: `<div><b>Success: </b><br>${message}</div>`
            });
        }  

        function displayErrorMsg (message) {
            ngToast.create({
              className: 'danger',
              content: `<div><b>Errors: </b><br>${message}</div>`
            });
        }  
    }
  
    angular
      .module('pmRailsApp')
      .service('ToastService', ['ngToast', ToastService])
  }())