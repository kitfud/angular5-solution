(function () {
    'use strict';
    angular.module('public')
    .service('SignUpService', SignUpService)
    
 
    function SignUpService() {
        var service = this;
        service.data = {};
        return service;
    }
    
    })();