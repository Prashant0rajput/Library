import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {FormControl, Validators} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public firebase : AngularFireAuth , private router: Router , public snackBar: MatSnackBar) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password: string;
  emails : string;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

   signIn(){
  	this.firebase.auth.signInWithEmailAndPassword(this.emails, this.password).then((error) => {


  console.log( "error");
  //console.log(error.message);
  console.log(error.user.email);
  if(error.message == undefined)
  {

  localStorage.setItem('ID', this.firebase.auth.currentUser.uid);
 this.router.navigate(['home']);
}

  });
}

  ngOnInit() {


  }

}
