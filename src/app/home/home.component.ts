import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

books: any;


  constructor( public firebase: AngularFireAuth , public db: AngularFireDatabase , private router: Router ) {

  	this.db.list('books').valueChanges().subscribe(value => {this.books = value})

   }

  ngOnInit() {

      console.log(this.firebase.auth);
     user = this.firebase.getInstance.getCurrentUser;


if (user != null) {
    // Name, email address, and profile photo Url
   

    // Check if user's email is verified
    

    // The user's ID, unique to the Firebase project. Do NOT use this value to
    // authenticate with your backend server, if you have one. Use
    // FirebaseUser.getIdToken() instead.
    String uid = user.getUid;
    console.log(uid);
}
  }

  logout() {
    this.firebase.auth.signOut();
    this.router.navigate(['']);
  }


}
