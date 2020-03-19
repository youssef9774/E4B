import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignComponent} from './SignUp/SignUp.component';

import { TaskViewComponent } from './pages/task-view/task-view.component';


const routes: Routes = [
  {path: '', component:TaskViewComponent},
  {path: 'register', component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
