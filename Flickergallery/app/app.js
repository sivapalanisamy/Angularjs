var flickrApp = angular.module('flickrGallery',['ngAnimate', 'ngTouch','ngRoute']);


flickrApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/header.html',
        controller: 'FlickController'
      }).
      when('/', {
        templateUrl: 'partials/imageslider.html',
        controller: 'FlickController'
      })
  }]);


 

