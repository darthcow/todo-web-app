import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {HttpClient} from '@angular/common/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todoItem: Todo;
  notChecked: boolean;
  constructor() { }

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

  onToogle(todoItem: Todo) {
todoItem.completed = !todoItem.completed;
  }

  onDelete(todoItem: Todo) {

  }
}
