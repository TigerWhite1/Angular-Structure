/* 
Fichier Name: angular-route.js
Description: Strucutre Angular 
Version: 0.1
Author: Thomas dugue
Author URI: http://www.thomasdugue.com
*/

angular.module('myApp', ['ngRoute', 'ngCookies'])

.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: "View/home.html",
		controller: "homeController"
	})
	$routeProvider.when('/login', {
		templateUrl: "View/",
		controller: "loginController"
	})
	$routeProvider.when('/logout', {
		templateUrl: "View/home.html",
		controller: "logoutController"
	})
});