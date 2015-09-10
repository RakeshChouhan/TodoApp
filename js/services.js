(function(){

 var services = angular.module("todo.services", []);
 services.service("todoService",[function(){
 	var tasks = [];
 	this.getTasks = function(){
 		return tasks;
 	};
 }]);

})();