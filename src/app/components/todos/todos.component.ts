import { Observable } from 'rxjs';
import { getUuid } from 'ngrx-data';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { TodosTypes } from 'src/app/models/Todos';
import { TodosStateType } from 'src/app/store/todos/types';
import { selectAllTodos } from 'src/app/store/todos/selectors';
import { addTodo, removeTodo, updateTodo } from 'src/app/store/todos/actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<TodosTypes[]> = this.store$.pipe(select(selectAllTodos));

  titleName = '';

  editedTodo: TodosTypes = null;

  constructor(private store$: Store<TodosStateType>) {}

  ngOnInit(): void {}

  handleRemove = (id: string): void => {
    this.store$.dispatch(removeTodo({ id }));
  };

  handleAddTodo = (): void => {
    if (!this.titleName) { return; }

    this.store$.dispatch(addTodo({ todo: { id: getUuid(), title: this.titleName, complete: false } }));
    this.titleName = '';
  };

  handleToggleEditMode = (todo: TodosTypes) => {
    this.editedTodo = todo;
  };

  handleSaveTodo = () => {
    this.store$.dispatch(updateTodo({ id: this.editedTodo.id, updates: this.editedTodo }));
  };

  handleChange = (event: Event) => {
    const { value, name } = event.target as HTMLInputElement;

    this.editedTodo = { ...this.editedTodo, [name]: value };
  };

  handleChangeChecked = (todo: TodosTypes, event: Event) => {
    const { checked } = event.target as HTMLInputElement;

    this.store$.dispatch(updateTodo({ id: todo.id, updates: { ...todo, complete: checked } }));
  };
}
