import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './components/pages/todo-page/todos/todos.component';
import {AboutComponent} from './components/pages/about/about.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
