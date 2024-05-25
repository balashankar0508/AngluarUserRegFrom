import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserviewComponent } from './userview/userview.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsereditComponent } from './useredit/useredit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserservService } from './userserv.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    UserviewComponent,
    UserdetailsComponent,
    UsereditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserservService],
  bootstrap: [AppComponent],
})
export class AppModule {}
