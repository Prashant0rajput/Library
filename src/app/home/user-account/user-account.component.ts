import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
BookKeys : [];
index : [];
books : any;
review : string;
 constructor( public firebase: AngularFireAuth , public db: AngularFireDatabase ) {

  	this.db.list('books').snapshotChanges().subscribe(value => {this.BookKeys = value;

      var keys = Object.keys(value);
    //   console.log(value);
    // console.log(value[7].key);


    });

    this.db.list('books').valueChanges().subscribe(val => {this.books = val;

      var keys = Object.keys(val);
    //   console.log(val);
    // console.log(keys);


    });




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

   makeReview(j , body){

    console.log(j);
    console.log(body);
     const itemsRef = this.db.list('books/'+this.BookKeys[j].key+'/reviews');
    itemsRef.push( {body : body });
  

   }

  ngOnInit() {
  console.log(this.firebase.auth['app']);
  console.log(this.firebase.auth);
  //console.log(this.firebase.auth.currentUser.uid);
  console.log(localStorage.getItem('ID'));
  }

}
