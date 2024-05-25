import { Component } from '@angular/core';
import { User } from '../user';
import { UserservService } from '../userserv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent {
  uid: any = null;
  userobj = new User('', 0, '');
  constructor(
    private serv: UserservService,
    act: ActivatedRoute,
    private rt: Router
  ) {
    this.uid = act.snapshot.params['id'];
    this.serv.selectuserbyid(this.uid).subscribe((dt) => {
      this.userobj = dt;
    });
  }

  deletecode() {
    let conf = confirm('Are you sure you want to delete');
    if (conf == true) {
      this.serv.deleteuser(this.uid).subscribe(
        () => {
          this.rt.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
