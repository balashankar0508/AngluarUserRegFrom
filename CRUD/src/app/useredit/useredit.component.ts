import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
})
export class UsereditComponent {
  userobj = new User('', 0, '');
  constructor(private userserv: UserservService, private rt: Router) {}

  saveuser() {
    alert('Saved Successfully');
    this.userserv.updateuser(this.userobj).subscribe(
      () => {
        this.rt.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
