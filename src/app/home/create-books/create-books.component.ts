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
	BookKeys : [];
index : [];
books : any;
bookSearch : String;
bookID : String;
bookKey : String;
itemsRef : any ;


  constructor(public db: AngularFireDatabase) {

  		this.db.list('books').snapshotChanges().subscribe(value => {this.BookKeys = value;

      var keys = Object.keys(value);
        this.itemsRef = this.db.list('books');
    //   console.log(value);
    // console.log(value[7].key);


    });

    this.db.list('books').valueChanges().subscribe(val => {this.books = val;

      var keys = Object.keys(val);
    //   console.log(val);
    // console.log(keys);


    });


   }

  ngOnInit() {
  }


  create(){
  	console.log("create called");
   
    this.itemsRef.push(
     { "title" :this.titles , "writer" : this.author , 
     "reviews" : " " , "issuedTo" : 0 }).then((snap) => {
     this.bookKey = snap.key 
    
    
     
  });
    // alert("book created");
  }

  delete(j)
  {
  	if (confirm('Are you sure you want to delete this book?')) {
     const itemsRef = this.db.list('books/'+this.BookKeys[j].key);
      itemsRef.remove();
   }

  }

}
