import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoRemove } from 'src/app/actions/todo.actions';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  todos: Observable<any>;

  constructor(
    private store: Store<{ todos: any }>
  ) {
    store.pipe(select('todos')).subscribe(
      data => {
        this.todos = data;
      }
    )
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index))
  }

  ngOnInit(): void {
  }

}
