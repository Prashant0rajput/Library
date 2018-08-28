import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	book : any;
	books : any;
  bookSearch : any;
  panelOpenState = false;
  notices : any;
  constructor( public firebase: AngularFireAuth , public db: AngularFireDatabase , private router: Router ) {

  	this.books = this.db.list('books').valueChanges().subscribe(value =>{this.book = value ; console.log(this.book[0])})
    this.db.list('notices').valueChanges().subscribe(val => {this.notices = val})
   }

  ngOnInit() {
    
  }

  getArray(object)
   {
      var arr = [];
    for(var obj in object)
    {
      arr.push(object[obj]);
    }

    return arr;
   }

}
