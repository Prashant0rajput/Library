import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
//   constructor(public firebase: AngularFireAuth) {
//   }

//   email = new FormControl('', [Validators.required, Validators.email]);
//   hide = true;
//   password: String;
//   emails : String;
//   getErrorMessage() {
//     return this.email.hasError('required') ? 'You must enter a value' :
//         this.email.hasError('email') ? 'Not a valid email' :
//             '';
//   }
//   login() {
//    this.firebase.auth.createUserWithEmailAndPassword(this.emails, this.password).catch(function(error) {
 
//   var errorCode = error.code;
//   var errorMessage = error.message;
  
// });

//    this.firebase.auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   console.log(idToken);
// }).catch(function(error) {
//   // Handle error
// });
//   }


//   logout() {
//     this.afAuth.auth.signOut();
//   }
}
