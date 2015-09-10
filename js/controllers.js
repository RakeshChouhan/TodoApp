(function(){
	var todoControllers = angular.module("todo.controller",["todo.services"]);
	todoControllers.controller("todoListController",["$scope", "todoService", function($scope, todoService){
		// {id:1, desc:"Complete test cases", isDone:false}
		$scope.todos = todoService.getTasks();
		$scope.addTask = function(event){
			if(event.keyCode==13){
				if($scope.task != undefined && $scope.task != "" ){
					var todo = {};
					var todos = $scope.todos;
					todo.id= todos.length +1 ;
					todo.desc = $scope.task;
					todo.isDone=false;
					$scope.todos.push(todo);
					$scope.task = "";
					
				}
				
			}
		}

		$scope.markDone =function(todo,status){
			var todos = $scope.todos;
			todo.isDone = status;
			for(var i=0;i<todos.length;i++){
				if(todos[i].id == todo.id){
					todos[i] = todo;
					break;
				}
			}
			$scope.todos = [];
			$scope.todos = todos;
			
		}

		$scope.removeCompletedTask = function(){
			var todos = $scope.todos;
			var filtered= [];
			for(var i=0; i<todos.length;i++){
				if(!todos[i].isDone){
					filtered.push(todos[i]);
				}
			}
			console.log(filtered);
			$scope.todos = [];
			$scope.todos=filtered;
		}


	}]);

})();