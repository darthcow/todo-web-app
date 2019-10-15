import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {TodosComponent} from './components/todos/todos.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
