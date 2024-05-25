import { Component } from '@angular/core';
import { User } from '../user';
import { UserservService } from '../userserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent {
  userobj = new User('', 0, '');
  constructor(private userserv: UserservService, private rt: Router) {}

  saveuser() {
    alert('Saved Successfully');
    this.userserv.adduser(this.userobj).subscribe(
      () => {
        this.rt.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
