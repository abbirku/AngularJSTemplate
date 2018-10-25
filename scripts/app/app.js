'use strict';

var app = angular.module('MyApp',['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '../../views/Home/home.html',
                controller: 'MyController'
            })
            .when('/contact',{
                templateUrl: '../../views/Home/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

app.controller('MyLayoutController',function () {
    console.log('Inside MyLayoutController');
});
