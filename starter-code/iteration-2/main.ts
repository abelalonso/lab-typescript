// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  list = [];
  addTask(task: string){
    this.list.push(task);
    console.log('======New Task======');
    console.log(`Task "${task}" inserted in the list`);
    return this.list.length;
  };
  listAllTasks(){
    console.log('======Listing Tasks======');
    this.list.forEach(e=>console.log(e));
  };
  deleteTask(task: string){
    this.list.splice(this.list.indexOf(task),1);
    console.log('======Delete Task======');
    console.log(`Task "${task}" delete from the list`);
    return this.list.length;
  };
}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
