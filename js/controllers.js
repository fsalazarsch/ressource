angular.module("App")
<<<<<<< HEAD

.controller("MainController", function($scope, $resource, PostResource, UserResource){
=======
<<<<<<< HEAD

.controller("MainController", function($scope, $resource, PostResource, UserResource){
=======
.controller("MainController", function($scope, $resource, PostResource){
>>>>>>> origin/master
>>>>>>> 05aaa1a70dd1403779aa3c46fda592ea13bc9a73
	
	//User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
	
	
	$scope.posts = PostResource.query();
	$scope.users = UserResource.query();
	
	$scope.removePost = function(post){
		PostResource.delete({id: post.id}, function(data){
			console.log(data);
			});
			$scope.posts = $scope.posts.filter(function(element){
				return element.id !== post.id;
				});
		}
	
	
	})
.controller("PostController", function($scope, PostResource, $routeParams, $location){
	$scope.title = "Editar Post";
	$scope.post = PostResource.get({id: $routeParams.id});
		$scope.savePost = function(){
			PostResource.update({id: $scope.post.id}, {data : $scope.post}, function(data){
				console.log(data);
				$location.path("/post/"+$scope.post.id);
				});
			}
	})

.controller("UserController", function($scope, UserResource, LibroResource, $routeParams, $location){
	$scope.title = "Editar Usuario";

	$scope.user = UserResource.get({id: $routeParams.id});
	$scope.libros = LibroResource.query();

	$scope.cliente = [
    { id: 1, name: 'TODOS'},
    { id: 2, name: 'LEIDOS'},
    { id: 3, name: 'NO LEIDOS'},
    { id: 4, name: 'CERRADOS'}
];

		$scope.savePost = function(){
			UserResource.update({id: $scope.user.id}, {data : $scope.user}, function(data){
				console.log(data);
				$location.path("/user/"+$scope.user.id);
				});
			}


	})
//login aplicacion
.controller("LoginController", function($scope, UserResource, $resource, $routeParams,  $location){
	

	$scope.title= "Login";
	var flag = false;
	$scope.verificar = function(){
			//alert($scope.user.id+'  '+$scope.user.name);
			UserResource.get({ id: $scope.user.id }, function(data){
				$scope.usercompare = data;
				if (($scope.usercompare.id == $scope.user.id) && ($scope.usercompare.email == $scope.user.email) && ($scope.usercompare.username == $scope.user.username) )
					$location.path("/user/"+$scope.user.id);
				else
					alert('Los parámetros no coinciden');
			});

				
				
				};
				
	
	})
.controller("NewPostController", function($scope, PostResource, $location){
	
	$scope.post = {};
	$scope.title= "Crear Post";
	$scope.savePost = function(){
			PostResource.save({data : $scope.post}, function(data){
				console.log(data);
				$location.path("/");
				});
				
		}
	
	});
