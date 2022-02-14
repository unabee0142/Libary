import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { BookComponent } from './components/pages/book/book.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { MainComponent } from './components/pages/main/main.component';
import { AddBookComponent } from './components/pages/book-add/book-add.component';
import { EditBookComponent } from './components/pages/book-edit/book-edit.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookComponent,
    StaffComponent,
    MainComponent,
    AddBookComponent,
    EditBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
