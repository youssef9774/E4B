import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  createAccount(user) {
    return this._http.post('http://localhost:4200/users/register', user)
      .map(resp => resp);
  }

}

