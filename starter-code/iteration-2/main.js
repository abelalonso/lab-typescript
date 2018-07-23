"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo() {
        this.list = [];
    }
    Todo.prototype.addTask = function (task) {
        this.list.push(task);
        console.log('======New Task======');
        console.log("Task \"" + task + "\" inserted in the list");
        return this.list.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        console.log('======Listing Tasks======');
        this.list.forEach(function (e) { return console.log(e); });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        this.list.splice(this.list.indexOf(task), 1);
        console.log('======Delete Task======');
        console.log("Task \"" + task + "\" delete from the list");
        return this.list.length;
    };
    ;
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
