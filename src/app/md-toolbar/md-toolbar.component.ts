import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-md-toolbar',
  templateUrl: './md-toolbar.component.html',
  styleUrls: ['./md-toolbar.component.css']
})
export class MdToolbarComponent implements OnInit {
  appUser: AppUser;
  isAdmin = true;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  logout() {
    this.auth.logout();
  }
}
