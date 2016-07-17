angular.module('csvUploader')
.controller('signInController', ['$scope', '$http', '$timeout', '$location', 'appService', 
function ($scope, $http, $timeout, $location, appService) {
    var self = this;
    var url = "https://express-service-dkafle.c9users.io/sign-in";
    
    self.authenticate = function () {
        $http({
            method: 'POST',
            url: url,
            data: $scope.ctrl,
            headers: {'content-type': 'application/json'}
        })
        .success(function (result) {
            console.log(result);
            if (result.authenticated) {
                appService.isAuthenticated = true;
                $scope.ctrl.isSignedIn = true;
                appService.username = $scope.ctrl.username;
                $location.path('/list-files');
            } else {
                appService.isAuthenticated = false;
                $scope.ctrl.isSignedIn = false;
                //TODO: display proper message for failed sign-in
            }
        })
        .error(function (err) {
            console.log(err);
        });
    };
}]);