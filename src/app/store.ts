import {tassign} from 'tassign';
//import {Map} from 'immutable';
import {ADD, TOGGLE, REMOVE, CLEAR} from './actions';

export interface IAppState {
    counter: number;
    //todos : Array<any>;
    todos : any[];
    lastUpdate: Date;
   /* messaging?: {
        newMessages: number;
    }*/
}

export const INITIAL_STATE: IAppState = {
    counter: 0, todos:[], lastUpdate: null
    
   /* counter: 0,
    messaging: {
        newMessages: 5
    }*/
}

export function rootReducer (state: IAppState, action): IAppState {
//export function rootReducer (state: Map<string,any>, action): Map<string, any> {
    
    switch (action.type) {
        case ADD: 
            //return {counter: state.counter + 1};
            //return Object.assign({}, state, {counter: state.counter + 1, isOnline: true});
            //tassign will check and not allow the following:
            //tassign(state, {counter: state.counter + 1,isOnline: true})
            //with immutable object, we don't need tassign anymore
            var newTodo = {id: state.todos.length + 1, title: action.title};
            var newList = state.todos.concat(newTodo);
            return tassign(state, {counter: state.counter + 1, todos: newList, lastUpdate: new Date()});
            //return state.set('counter', //state.get('counter')+1);
        case TOGGLE:
            return tassign(state, {lastUpdate: new Date()});
        case REMOVE:
            var index = state.todos.indexOf(action.todo);
            var todosBefore = state.todos.slice(0,index);
            var todosAfter = state.todos.slice(index + 1);
            return tassign(state, {counter: state.counter - 1, todos: todosBefore.concat(todosAfter), lastUpdate: new Date()});
            //this.todos.splice(index, 1);
        case CLEAR:
            return tassign(state,{counter:0, todos:[], lastUpdate: new Date()});
    }
    return state;
}