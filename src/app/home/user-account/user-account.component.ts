import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(public firebase: AngularFireAuth) { }

  ngOnInit() {
  console.log(this.firebase.auth['app']);
  console.log(this.firebase.auth);
  console.log(this.firebase.auth.currentUser);
  }

}
