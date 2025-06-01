import { Injectable } from '@angular/core';
import { Todo } from '../models/model.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      userId: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      userId: 2,
      title: 'Build a Todo App',
      completed: false,
    },
    {
      id: 3,
      userId: 3,
      title: 'Deploy the App',
      completed: false,
    },
  ];
  constructor() {}
}
