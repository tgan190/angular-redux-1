import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import {NgRedux, select} from 'ng2-redux';
import { IAppState } from '../store'; 
import { CLEAR } from '../actions'; 

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
   
  @select() counter: number; 
  @select() lastUpdate: Date; 
 //lastUpdate;
  
  // Read the comment in TodoService
 //constructor(private service: TodoService) { 
  constructor(private ngRedux: NgRedux<IAppState>) { 
    //this.todos = service.getTodos().length;
    
    /*service.todoAdded.subscribe(() => { 
      this.todos++;
      this.lastUpdate = new Date();
    });

    service.todoRemoved.subscribe(() => {
      this.todos--;
      this.lastUpdate = new Date();
    });

    service.todoToggled.subscribe(() => {
      this.lastUpdate = new Date();
    });

    service.todosCleared.subscribe(() => {
      this.todos = 0; 
      this.lastUpdate = new Date();
    });
    */
  }
  
  clearTodos() {
    //this.service.clearTodos();
    this.ngRedux.dispatch({type: CLEAR});
  }
}