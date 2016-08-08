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
		templateUrl: "app/views/home.html",
		controller: "homeController"
	})
	$routeProvider.when('/login', {
		templateUrl: "app/views/login.html",
		controller: "loginController"
	})
	$routeProvider.when('/logout', {
		templateUrl: "app/views/home.html",
		controller: "logoutController"
	})
});