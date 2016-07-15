angular.module('csvUploader')
.controller('listController', ['$scope', '$http', 'Upload', '$timeout', 
function ($scope, $http, Upload, $timeout) {
    var fileList = this;
    
    fileList.items = [];
    fileList.getFiles = function () {
        $http.get('https://express-service-dkafle.c9users.io/listFiles').then(function(response) {
            console.log(response.data);
            fileList.items = response.data;
        });
    };
    fileList.addFile = function () {
        fileList.items.push({filename: 'newFile.csv', date: new Date()});
    };
    //get file as soon as view loads
    fileList.getFiles();
}]);