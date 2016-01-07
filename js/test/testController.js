<<<<<<< HEAD
describe('LoginController', function() {
  	beforeEach(module('App'));

  	var $controller;

  	beforeEach(inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
 	}));

  	describe('valida login', function() {
    	it('folio - nombre - password not null', function() {
      		var $scope = {};
      		var controller = $controller('LoginController', { $scope: $scope });
      		$scope.folio = "123";
          $scope.nombre = "gaston";
          $scope.password = "xxxx";
      		expect($scope.folio).not.toBeNull();
          expect($scope.nombre).not.toBeNull();
          expect($scope.password).not.toBeNull();
    	});
  	});
});

=======
describe('LoginController', function() {
  	beforeEach(module('App'));

  	var $controller;

  	beforeEach(inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
 	}));

  	describe('valida login', function() {
    	it('folio - nombre - password not null', function() {
      		var $scope = {};
      		var controller = $controller('LoginController', { $scope: $scope });
      		$scope.folio = "123";
          $scope.nombre = "gaston";
          $scope.password = "xxxx";
      		expect($scope.folio).not.toBeNull();
          expect($scope.nombre).not.toBeNull();
          expect($scope.password).not.toBeNull();
    	});
  	});
});

>>>>>>> 05aaa1a70dd1403779aa3c46fda592ea13bc9a73
