(function () {
    angular.module('common')
    .controller('InfoController', InfoController)
    
    InfoController.$inject=['SignUpService','menuItems']
    function InfoController(SignUpService, menuItems) {
      var $ctrl = this;
      $ctrl.menuItems = menuItems;

      console.log($ctrl.menuItems);

      $ctrl.data = SignUpService.data;
     
    

  
    
     
    }
    
    })();