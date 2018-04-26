import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import {NgRedux, select } from 'ng2-redux';

import {IAppState} from '../store';
import {ADD, TOGGLE, REMOVE} from '../actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  //constructor(private service: TodoService) { 
  //}

   @select() todos;

constructor (private ngRedux: NgRedux<IAppState>) {
}
     
  addTodo(input) {
    if (!input.value) return; 

    //this.service.addTodo(input.value);
    
        //this.counter++;
    this.ngRedux.dispatch({type: ADD, title: input.value});
    
    input.value = '';
  }

  toggleTodo(todo) {
    //this.service.toggleTodo(todo);
    todo.isXXCompleted = !todo.isXXCompleted;
    this.ngRedux.dispatch({type: TOGGLE, todo: todo});
  }

  removeTodo(todo) {
    //this.service.removeTodo(todo);
    //var index = this.todos.indexOf(todo);
    //this.todos.splice(index, 1);
    this.ngRedux.dispatch({type: REMOVE, todo: todo});
  }
}
