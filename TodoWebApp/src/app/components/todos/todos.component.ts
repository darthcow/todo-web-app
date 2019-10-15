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

  deleteTodo(todo: Todo) {
console.log('delete me');
// remove from UI
this.todoList = this.todoList.filter(t => t.id !== todo.id);
// Remove from server
this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
this.todoService.addTodo(todo).subscribe();
this.todoList.push(todo);
  }
}
