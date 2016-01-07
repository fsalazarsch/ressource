
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};

angular.module("App",["lumx","ngRoute","ngResource"])
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 05aaa1a70dd1403779aa3c46fda592ea13bc9a73



.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {

   
<<<<<<< HEAD
		$routeProvider
			.when('/', {
			
			//	controller: 'MainController',
			//	templateUrl: 'templates/home.html'
			//	})
			//.when('/index', {
=======
=======
//.config(function ($compileProvider){
//    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//})
.config(function($routeProvider){
>>>>>>> origin/master
		$routeProvider
		
			.when('/', {
				controller: 'LoginController',
				templateUrl: 'templates/login.html'
				})
			.when('/index', {
				controller: 'LoginController',
				templateUrl: 'templates/login.html'
				})
>>>>>>> 05aaa1a70dd1403779aa3c46fda592ea13bc9a73
				controller: 'LoginController',
				templateUrl: 'templates/login.html'
				})
			.when('/post/:id', {
				controller: 'PostController',
				templateUrl: 'templates/post.html'
				})
			.when('/user/:id', {
				controller: 'UserController',
				templateUrl: 'templates/user.html'
				})
			.when('/posts/new', {
				controller: 'NewPostController',
				templateUrl: 'templates/post_form.html'
				})
			.when('/posts/edit/:id', {
				controller: 'PostController',
				templateUrl: 'templates/post_form.html'
				})
<<<<<<< HEAD


	//$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}]);
=======
<<<<<<< HEAD


	//$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}]);
=======
	//$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
		});
>>>>>>> origin/master
>>>>>>> 05aaa1a70dd1403779aa3c46fda592ea13bc9a73
