import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {FormControl, Validators} from '@angular/forms';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(public firebase: AngularFireAuth , private router: Router) {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password: string;
  emails : string;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  signUp() {
   this.firebase.auth.createUserWithEmailAndPassword(this.emails, this.password).catch(function(error) {
 
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  this.router.navigate(['signIn']);
});

//    this.firebase.auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   console.log(idToken);
// }).catch(function(error) {
//   // Handle error
// });
  }

 

  
  ngOnInit() {
  }

}
