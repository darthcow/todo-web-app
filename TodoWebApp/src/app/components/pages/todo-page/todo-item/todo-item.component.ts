import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../../models/Todo';
import {HttpClient} from '@angular/common/http';
import {TodoService} from '../../../../services/todo.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todoItem: Todo;
@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  notChecked: boolean;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
// if (this.notChecked !== true)
// {
//   this.todoItem
// }
  }

  setClasses() {

    return {
      todo: true,
      'is-complete': this.todoItem.completed
    };
  }

  onToggle(todoItem: Todo) {
// Toggle on UI
    todoItem.completed = !todoItem.completed;
  // Toggle on server
    this.todoService.toggleCompleted(todoItem).subscribe(todo => console.log(todo));

  }

  onDelete(todoItem: Todo) {
this.deleteTodo.emit(todoItem);
  }
}
