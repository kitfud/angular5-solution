(function () {
    'use strict';
    angular.module('common')
    .controller('RegistrationController', RegistrationController)
 

    RegistrationController.$inject=['SignUpService']
    function RegistrationController(SignUpService) {
      var reg = this;
     //this is where thing are passed on for another viewState
      reg.submit = function () {
      reg.completed = true;
      var firstName = reg.user.firstname;
      var lastName = reg.user.lastname;
      var email = reg.user.email;
      var favItem = reg.user.favitem;
      var phoneNumber = reg.user.phone;
      SignUpService.data["firstName"]=firstName;
      SignUpService.data["lastName"]=lastName;
      SignUpService.data["email"]=email;
      SignUpService.data["favItem"]=favItem;
      SignUpService.data["phoneNumber"]=phoneNumber;
      };
    }
    
    })();


