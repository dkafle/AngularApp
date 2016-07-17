angular.module('csvUploader')
.service('appService', function() {
    var isAuthenticated = false;
    var username = "";
    
    return {
        isAuthenticated: isAuthenticated,
        username: username
    }
})