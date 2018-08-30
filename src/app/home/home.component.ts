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

    // console.log(this.firebase.auth);
     //user = this.firebase.getInstance.getCurrentUser;
     if(localStorage.getItem('ID') == null)
    {
        this.router.navigate(['']);
    }

  }


  getID()
  {
  if(localStorage.getItem('ID') == 'AUnUOdzdZye1E1gAC7m78TCnLWJ2' || localStorage.getItem('ID') == 'YxlKFE1DqbV9T6LJU7mTmVDoaBP2'){
  return true;
  }

  return false;
  }

  logout() {
    this.firebase.auth.signOut();
    localStorage.removeItem('ID')
    this.router.navigate(['']);
  }


}
