import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/pages/book-add/book-add.component';
import { EditBookComponent } from './components/pages/book-edit/book-edit.component';
import { BookComponent } from './components/pages/book/book.component';
import { MainComponent } from './components/pages/main/main.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"login",component:LoginComponent},
  {path:"book",component:BookComponent, canActivate:[AuthGuard]},
  {path:"book/add",component:AddBookComponent, canActivate:[AuthGuard]},
  {path:"book/edit/:id",component:EditBookComponent, canActivate:[AuthGuard]},
  {path:"staff",component:StaffComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
