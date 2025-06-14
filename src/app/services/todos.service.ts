import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/model.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  getTodos() {
    const api = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(api);
  }
}
