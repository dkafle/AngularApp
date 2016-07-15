var app = angular.module('csvUploader', ['ngRoute','ngFileUpload']);

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');
        
        $routeProvider.when('/sign-in', {
            templateUrl: "./app/templates/sign-in.html",
            controller: ""
        })
        .when('/list-files', {
            templateUrl: "./app/templates/files.html",
            controller: ""
        })
        .when('/upload', {
            templateUrl: "./app/templates/upload.html",
            controller: ""
        })
        .when('/home', {
            template: "<div>Welcome to the CSV Uploader. PLease choose your options from the menu.</div>",
            controller: ""
        })
        .otherwise('/home');
    }
]);