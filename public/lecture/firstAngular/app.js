/**
 * Created by wuyan on 7/4/17.
 */
(function () {
    angular
        .module("TodoApp",[]) //chaining
        .controller("TodoListController", TodoListController);
    
    function TodoListController($scope, $http) {
        //the framework defined scope. object-oriented way to talk
        //view care DOM, controller events/model/send data to view
        //$scope allows you to interact with DOM
        //$http allows you to interact with any http source
        $scope.todo={"title": "Todo initial", "details":"Todo Details"};
        $scope.addNote = AddTodo;
        $http.get("/api/todo") //returns a promise get back
            .then(function(response){
                console.log(response);
                $scope.todos = response.data;
            });

        console.log($scope.todos);

        $scope.removeTodo = removeTodo;
        $scope.selectTodo = selectTodo;
        $scope.updateTodo = updateTodo;
        function updateTodo(todo){
            $scope.todos[$scope.selectedIndex]=todo;
        }
        function selectTodo(index){
            $scope.todo = angular.copy($scope.todos[index]);
            $scope.selectedIndex = index;
        }
        function AddTodo(todo) {

            // var newTodo = {
            //     "title":todo.title
            // };
            var newTodo = angular.copy(todo);
            newTodo._id = (new Date()).getTime();
            newTodo.date = new Date();
            $scope.todos.push(newTodo);
            console.log($scope.todos);
        }
        function removeTodo(todo){
            var index = $scope.todos.indexOf(todo);
            //$scope.todos.splice(index,1);
            $http.delete('/api/todo/'+index)
                .then(function(response){
                    $scope.todos=response.data;
                });
            console.log($scope.todos);
        }

    }

    //model data have no idea how is this going to be render
    //how to structure the data
    //controller: respond to the events generated to the view, handle the events stream, convert to action
    //view:
    // controller interact the model, action manipulate the model

})();