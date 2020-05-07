(function () {
    'use strict';
    angular.module('common')
    .controller('RegistrationController', RegistrationController)
 

    RegistrationController.$inject=['SignUpService','MenuService','$scope']
    function RegistrationController(SignUpService,MenuService,$scope) {
      var reg = this;
      
    
    
     //this is where thing are passed on for another viewState
      reg.submit = function () {
      reg.completed = true;

      var firstName = reg.user.firstname;
      var lastName = reg.user.lastname;
      var email = reg.user.email;
      var favItem = reg.user.favitem;
      var phoneNumber = reg.user.phone;
//reg item is what we are using to define the length of the object. if it is 0 then it doesn't exist
      MenuService.getMenuItem(reg.user.favitem).then(function(response){reg.item = response.menu_items.length})
      
     

  
     




      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["phoneNumber"]=phoneNumber;

      SignUpService.data["favItem"]=favItem;
      

      
      SignUpService.data["menu"] = MenuService.getMenuItem(favItem).then(function(response){return response.data});

    




      };
    }
    
    })();


