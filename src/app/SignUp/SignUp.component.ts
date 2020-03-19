import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {NgForm} from "@angular/forms";


@Component({

  templateUrl: './SignUp.component.html',
  styleUrls: ['./Sign.component.css']

})
export class SignComponent implements OnInit {
  name : String;
  email: String;
  password: String;
isLoading =false;
onReg(form:NgForm){
  console.log(form.value);
}

  constructor(
    private _userService: UserService
  ){


  }
  ngOnInit() {}

  onRegister(){
    if (!this.name || !this.email || !this.password) {
      alert("completer les cases")
      return false;
    }
    const user = {
      name: this.name,
      email:this.email,
      password: this.password
    }

    this._userService.createAccount(user).subscribe(
      resp => {console.log(resp); }
    );

  }

}
