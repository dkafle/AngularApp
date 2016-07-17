angular.module('csvUploader')
.controller('uploadController', ['$scope', '$http', '$location', 
function ($scope, $http, location) {
    var self = this;
    
    self.submit = function () {
        console.log('get ready to submit');
        var url = 'https://express-service-dkafle.c9users.io/upload';
        console.log($scope.picFile);
        var file = $scope.picFile;
        var formData = new FormData();
        formData.append('file', file);
        $http({
            method: 'POST',
            url: url,
            data: formData,
            headers: {
                'Content-Type': undefined
            } 
        })
        .then(function(data) {
            if(data.statusText === 'OK') {
                location.path('/list-files');
            }
            console.log(data);
        });
    };
}]);