import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/model.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todos = signal<Array<Todo>>([]);
  ngOnInit() {
    this.todos.set(this.todoService.todos);
  }
}
