angular.module('csvUploader')
.service('appService', function() {
    var isAuthenticated = false;
    
    return {
        isAuthenticated: isAuthenticated
    }
})