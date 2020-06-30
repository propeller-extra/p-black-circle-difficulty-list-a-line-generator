import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-a-line-generator-form',
  templateUrl: './a-line-generator-form.component.html',
  styleUrls: ['./a-line-generator-form.component.sass']
})
export class ALineGeneratorFormComponent implements OnInit {

  @Output() addTodo = new EventEmitter<Todo>();

  public todo: Todo = {
    name: '',
    isDone: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  clicked(): void {
    this.addTodo.emit(this.todo);
  }

}
