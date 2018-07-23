"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(task) {
        this.title = task;
        this.status = false;
        this.updatedAt = new Date();
    }
    ;
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasksArr = [];
    }
    TodoList.prototype.addTask = function (task) {
        console.log('======New Task======');
        console.log("Task \"" + task + "\" inserted in the list");
        this.tasksArr.push(task);
        return this.tasksArr.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        console.log('======Listing Tasks======');
        this.tasksArr.forEach(function (e) { return console.log(e); });
    };
    ;
    TodoList.prototype.deleteTask = function (task) {
        this.tasksArr.splice(this.tasksArr.indexOf(task), 1);
        console.log('======Delete Task======');
        console.log("Task \"" + task + "\" delete from the list");
        return this.tasksArr.length;
    };
    ;
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
