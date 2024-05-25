import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: 'create', component: CreateuserComponent },
  { path: 'updateuser/:id', component: UsereditComponent },
  { path: 'view', component: UserviewComponent },
  { path: 'details/:id', component: UserdetailsComponent },
  { path: '', component: UserviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
