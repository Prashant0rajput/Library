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

  	this.books = this.db.list('books').valueChanges().subscribe(value => console.log(value))

   }

  ngOnInit() {
  }

  logout() {
    this.firebase.auth.signOut();
    this.router.navigate(['']);
  }


}
