import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	name : String;
	email : String;
	rollNo : any;
	password : String;


  constructor(public db: AngularFireDatabase , public firebase: AngularFireAuth) { }

  ngOnInit() {
  }

   create(){
  	console.log("create called");
    const itemsRef = this.db.list('user');
    itemsRef.push( { "name" :this.name , "email" : this.email , "password" : "password" , "rollNo" : this.rollNo});
    alert("user created");


   this.firebase.auth.createUserWithEmailAndPassword(this.email, "password").catch(function(error) {
 
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  
});
}

}
