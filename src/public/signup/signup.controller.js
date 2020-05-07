(function () {
    'use strict';
    angular.module('common')
    .controller('RegistrationController', RegistrationController)
 

    RegistrationController.$inject=['SignUpService','MenuService']
    function RegistrationController(SignUpService,MenuService) {
      var reg = this;
      /*
      var firstName = "";
      var lastName = "";
      var email = "";
      var favItem = "";
      var phoneNumber = "";
      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["phoneNumber"]=phoneNumber;
      SignUpService.data["favItem"]=favItem;
*/
    
     //this is where thing are passed on for another viewState
      reg.submit = function () {
      reg.completed = true;

      var firstName = reg.user.firstname;
      var lastName = reg.user.lastname;
      var email = reg.user.email;
      var favItem = reg.user.favitem;
      var phoneNumber = reg.user.phone;
//reg item is what we are using to define the length of the object. if it is 0 then it doesn't exist
      MenuService.getMenuItem(favItem.toUpperCase()).then(function(response){
          reg.item = response.menu_items.length;

          if(reg.item>0){
            SignUpService.data["firstName"]=firstName;
            SignUpService.data["lastName"]=lastName;
            SignUpService.data["email"]=email;
            SignUpService.data["phoneNumber"]=phoneNumber;
            SignUpService.data["favItem"]=favItem.toUpperCase();
          }
        
        
        
        })
      
 /*
      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["phoneNumber"]=phoneNumber;
      SignUpService.data["favItem"]=favItem;
*/
      };
    }
    
    })();


