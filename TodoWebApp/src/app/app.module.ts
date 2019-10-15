import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './components/pages/todo-page/todo-item/todo-item.component';
import {TodosComponent} from './components/pages/todo-page/todos/todos.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {AddTodoComponent} from './components/pages/todo-page/add-todo/add-todo.component';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodosComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
