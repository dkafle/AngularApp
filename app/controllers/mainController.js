angular.module('csvUploader')
.controller('mainController', ['$scope', 'Upload', '$timeout', 
function ($scope, Upload, $timeout) {
    var fileList = this;
    
    fileList.items = [
        {filename: 'foo.csv', date: '5/5/2016'},
        {filename: 'bar.csv', date: '6/4/2016'},
        {filename: 'baz.csv', date: '3/6/2016'}
    ];
    fileList.addFile = function () {
        fileList.items.push({filename: 'newFile.csv', date: new Date()});
    };
}]);