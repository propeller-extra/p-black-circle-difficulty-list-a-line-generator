import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'p-black-circle-difficulty-list-a-line-generator';
  loginForm: FormGroup;

  public appTodos: Todo[] = [];

  ngOnInit(): void {
  }

  added(todo: Todo): void {
    this.appTodos.push({
      name: todo.name,
      isDone: todo.isDone,
    });
  }
}
