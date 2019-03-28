import { Component, OnInit } from '@angular/core';

import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public title: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.title = "hi"
  }

  login() {
    this._userService.getUser();
  }

}
