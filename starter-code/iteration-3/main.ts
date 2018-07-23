// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  constructor(task: string){
    this.title = task;
    this.status = false;
    this. updatedAt = new Date();
  };
  title;
  status;
  updatedAt;
  toggleStatus(){
    this.status = !this.status;
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
  tasksArr = [];
  addTask(task: TodoItemInterface) {
    console.log('======New Task======');
    console.log(`Task "${task}" inserted in the list`);
    this.tasksArr.push(task);
    return this.tasksArr.length;
  };
  listAllTasks(){
    console.log('======Listing Tasks======');
    this.tasksArr.forEach(e=>console.log(e));
  };
  deleteTask(task: TodoItemInterface) {
    this.tasksArr.splice(this.tasksArr.indexOf(task),1);
    console.log('======Delete Task======');
    console.log(`Task "${task}" delete from the list`);
    return this.tasksArr.length;
  };
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));

