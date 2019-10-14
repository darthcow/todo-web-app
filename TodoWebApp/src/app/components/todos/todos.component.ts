import { Component, OnInit } from '@angular/core';

class Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
