import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo:string = "";

  addTodo() {
    const todo: Todo = {
      content: this.inputTodo,
      completed: false
    };

    this.newTodoEvent.emit(todo)
    this.inputTodo = "";
  }
}
