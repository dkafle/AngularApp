angular.module('csvUploader')
.controller('menuController', ['$location', 'appService', function (location, appService) {
    var self = this;
    self.isSignedIn = function () {
        return appService.isAuthenticated;
    }
    self.signOut = function () {
        appService.isAuthenticated = false;
        location.path('/home');
    }
    self.isSignedIn();
}]);