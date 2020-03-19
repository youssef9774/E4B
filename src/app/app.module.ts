import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from './services/user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteCreateComponent } from './posts/poste-create/poste-create.component';
import {LogingComponent} from './auth/login/log.component';
import {SignComponent } from './SignUp/SignUp.component';
import {MatSelectModule} from '@angular/material/select';
import { FlashMessagesModule } from 'angular2-flash-messages';








import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: '', component: TaskViewComponent },

  { path: 'register', component: SignComponent },
  { path: 'login',      component: LogingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    SignComponent,
    PosteCreateComponent,
    TaskViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    FlashMessagesModule,



    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
