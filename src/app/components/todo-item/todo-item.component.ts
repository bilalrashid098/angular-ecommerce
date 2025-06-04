import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/model.type';
import { HighlightTodoCompletedDirective } from '../../directive/highlight-todo-completed.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightTodoCompletedDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>()
  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
