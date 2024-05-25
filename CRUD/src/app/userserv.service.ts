import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserservService {
  constructor(private hobj: HttpClient) {}

  adduser(userobj: User) {
    let url = 'http://localhost:3000/users';
    return this.hobj.post(url, JSON.stringify(userobj));
  }

  updateuser(userobj: User) {
    let url = 'http://localhost:3000/users/'+userobj.id;
    return this.hobj.put(url, JSON.stringify(userobj));
  }

  deleteuser(uid: any) {
    let url = 'http://localhost:3000/users/'+uid;
    return this.hobj.delete(url);
  }

  selectuser() {
    let url = 'http://localhost:3000/users';
    return this.hobj.get<User[]>(url);
  }

  selectuserbyid(uid: any) {
    let url = 'http://localhost:3000/users/' + uid;
    return this.hobj.get<User>(url);
  }
}
