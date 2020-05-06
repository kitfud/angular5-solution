(function () {
    angular.module('common')
    .controller('InfoController', InfoController)
    
    InfoController.$inject=['SignUpService']
    function InfoController(SignUpService) {
      var info = this;
      info.data = SignUpService.data;

  
    
     
    }
    
    })();