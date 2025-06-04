import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/model.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todos = signal<Array<Todo>>([]);
  loading = signal<boolean>(true);
  ngOnInit() {
    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todos.set(todos);
        this.loading.set(false);
      });
  }
  updateTodo(todo: Todo) {
    this.todos.update(() => {
      return this.todos()?.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            completed: !todo.completed,
          };
        }
        return item;
      });
    });
  }
}
