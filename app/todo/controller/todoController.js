angular.module('todoApp')
.controller('TodoListController', function() {
    var vm = this;

    vm.todos = [
        {
          text:"first todo",done:true
        },
        {
          text:"Second todo",done:false
        }
    ];

    vm.todoTotal = function(){
        return vm.todos.length;
    };

    vm.addTodo = function(){
      vm.todos.push({text:vm.formInput, done:false});
      vm.formInput = '';
    };

    vm.deleteTodo = function(){
        vm.todos = _.filter(vm.todos, function(list){
            return !list.done;  
        });
    };
});