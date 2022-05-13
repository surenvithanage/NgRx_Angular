import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAdd } from 'src/app/actions/todo.actions';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  constructor(
    private store: Store<{todos: any}>
  ) { 

  }

  AddTodo(todo: any) {
    const newTodo = new Todo();
    newTodo.title =  todo;
    this.store.dispatch(new TodoAdd(newTodo));
  }

  ngOnInit(): void {
  }

}
