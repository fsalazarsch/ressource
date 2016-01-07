angular.module("App")
.factory("PostResource", function($resource){

	return $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
	
	
	})
.factory("UserResource", function($resource){
	return $resource("http://nullpointerex.com/restapi/index.php/api/users/:id", {id: "@id"}, {update: {method: "PUT"}});
	
	})
.factory("LibroResource", function($resource){
	return $resource("http://nullpointerex.com/restapi/index.php/api/libros/:id", {id: "@id"}, {update: {method: "PUT"}});
	
	})