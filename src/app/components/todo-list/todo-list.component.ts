import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo: string = "";
  @Output() newTodoEvent = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    Swal.fire({
      title: 'Apakah sudah selesai?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Ya, Coret',
      denyButtonText: `Jangan, batal coret`,
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.todos.map((v, i) => {
          if (i == id) v.completed = !v.completed;
          console.log(v);
          return v;
        })
      } else if (result.isDenied) {
        Swal.fire('Tidak jadi dicoret', '', 'info')
      }
    })
  }

  deleteTodo (id:number) {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Anda tidak dapat mengembalikannya lagi!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
    if (result.isConfirmed) {
      this.todos = this.todos.filter((v, i) => i !== id);   
    Swal.fire(
      'Terhapus!',
      'File anda terhapus.',
      'success'
      )
    }
  })
  }
  

  addTodo(todo: Todo) {
    this.todos.push(todo);
    Swal.fire("Berhasil", "Anda berhasil menambah data", "success");
  }

  // editTodo(todo: Todo) {
  //   todo.edit = true;
  // }
}
