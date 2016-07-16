angular.module('csvUploader')
.controller('listController', ['$scope', '$http', '$timeout', '$location', 'appService',
function ($scope, $http, $timeout, $location, appService) {
    var fileList = this;
    
    fileList.items = [];
    fileList.getFiles = function () {
        if (appService.isAuthenticated) {
            $http.get('https://express-service-dkafle.c9users.io/listFiles').then(function(response) {
                console.log(response.data);
                fileList.items = response.data;
            });
        } else {
            $location.path('/sign-in');
        }
    };
    fileList.addFile = function () {
        fileList.items.push({filename: 'newFile.csv', date: new Date()});
    };
    //get file as soon as view loads
    fileList.getFiles();
}]);