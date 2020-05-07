(function () {
    angular.module('common')
    .controller('InfoController', InfoController)
    
    InfoController.$inject=['SignUpService','menuItems','ApiPath']
    function InfoController(SignUpService, menuItems,ApiPath) {
      var $ctrl = this;
      $ctrl.menuItems = menuItems;
      $ctrl.basePath = ApiPath;

      console.log($ctrl.menuItems);

      $ctrl.data = SignUpService.data;
     
    

  
    
     
    }
    
    })();