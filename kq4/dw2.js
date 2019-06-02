var kq1 = angular.module("todo" , []);

function control1($scope , $http)
{

	$scope.data1 = {};


$http.get('/api/q')
     .success(function(data){
     	$scope.kq2 = data;
     	console.log(data);
     })
     .error(function(data){
     	console.log("Error1" + data);
     });

     $scope.create1 = function(){
     	$http.post('/api/q' , $scope.data1)
     		 .success(function(kq4){
     		 	$scope.data1 = {};
     		 	$scope.kq2 = kq4;
     		 	console.log(kq4);
     		 })
     		 .error(function(kq4){
     		 	console.log("error1" + kq4);
     		 });
     };

      $scope.delete1 = function(id){

      		$http.delete('/api/q' +  id)
      		     .success(function(kq4)
      		     {
      		     	$scope.todos = kq4;
      		     	console.log(kq4);
      		     })
      		     .error(function(kq4){
      		     	console.log("Error1 : " + kq4);
      		     });		
      };
      }		