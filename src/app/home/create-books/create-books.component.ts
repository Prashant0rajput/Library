import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
	titles : String;
	author : String;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }


  create(){
  	console.log("create called");
    const itemsRef = this.db.list('books');
    itemsRef.push( { "title" :this.titles , "writer" : this.author , "reviews" : " " , "issuedTo" : 0});
    alert("book created");
  }

}
