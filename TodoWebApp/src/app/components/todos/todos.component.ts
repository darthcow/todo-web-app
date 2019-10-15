import {Component, OnInit, Input} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todoList: Todo[];

  constructor(private todoService: TodoService) {
    todoService.getTodos();
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {this.todoList = todos; });
  }

}
