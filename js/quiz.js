(function(){
	
	var app = angular.module('myQuiz', []);
	
	app.controller('QuizController',['$scope', '$http', '$sce',function($scope,$http,$sce){
		
			
		$scope.score = 0;
		$scope.activeQuestion = -1;
		
		
		
		}]);
	
	
	
	
})();