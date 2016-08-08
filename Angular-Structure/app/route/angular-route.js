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
		templateUrl: "View/",
		controller: "homeController"
	})
	$routeProvider.when('/account', {
		templateUrl: "View/",
		controller: "accountController"
	})
	$routeProvider.when('/logout', {
		templateUrl: "View/",
		controller: "logoutController"
	})
});