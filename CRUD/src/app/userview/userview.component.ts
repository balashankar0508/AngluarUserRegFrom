import { Component } from '@angular/core';
import { User } from '../user';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
})
export class UserviewComponent {
  ar: User[] = [];
  constructor(private servobj: UserservService) {
    this.servobj.selectuser().subscribe((dt) => {
      this.ar = dt;
    });
  }
}
