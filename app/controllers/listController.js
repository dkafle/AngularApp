angular.module('csvUploader')
.controller('listController', ['$scope', '$http', '$timeout', '$location', 'appService',
function ($scope, $http, $timeout, $location, appService) {
    var fileList = this;
    
    fileList.items = [];
    fileList.localItems = [];
    fileList.username = appService.username;
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
    fileList.getLocalFiles = function () {
        if (appService.isAuthenticated) {
            $http.get('https://express-service-dkafle.c9users.io/listLocalFiles?username=' + appService.username)
            .then(function(response) {
                fileList.localItems = response.data;
                console.log(response.data);
            });
        } else {
            $location.path('/sign-in');
        }
    };
    fileList.download = function (index) {
        var filename = fileList.localItems[index];
        var endpoint = 'https://express-service-dkafle.c9users.io/download';
        var query = '?filename=' + filename + '&username=' + appService.username;
        var url = endpoint + query;
        if (appService.isAuthenticated) {
            $http.get(url, function(data) {
                console.log('downloading...');
                var blob = new window.Blob([data], {type: "text/csv"});
                window.saveAs(blob, filename);
            });
        } else {
            $location.path('/sign-in');
        } 
    };
    //get file as soon as view loads
    fileList.getLocalFiles();
    fileList.getFiles();
}]);