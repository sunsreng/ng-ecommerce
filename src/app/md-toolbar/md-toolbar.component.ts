import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-md-toolbar',
  templateUrl: './md-toolbar.component.html',
  styleUrls: ['./md-toolbar.component.css']
})
export class MdToolbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
