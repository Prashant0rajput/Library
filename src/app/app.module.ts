import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { auth } from 'firebase';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule ,
 MatTabsModule ,
 MatCardModule,
  } from '@angular/material';
  import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UserAccountComponent } from './home/user-account/user-account.component';
import { BooksComponent } from './home/books/books.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreateBooksComponent } from './home/create-books/create-books.component';
import { CreateUserComponent } from './home/create-user/create-user.component';
import { BookManagerComponent } from './home/book-manager/book-manager.component';
import { NoticeComponent } from './home/notice/notice.component';
import { IssueBooksComponent } from './home/issue-books/issue-books.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxKjuaModule } from 'ngx-kjua';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule,
     Ng2SearchPipeModule,
     MatExpansionModule,
     MatSnackBarModule,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     MatIconModule,
     MatTabsModule,
     AppRoutingModule,
     AngularFireDatabaseModule,
     MatCardModule,
     MatButtonModule,
     ZXingScannerModule,
     NgxKjuaModule,
     MatStepperModule,
     MatChipsModule,
  ],
   declarations: [
    AppComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    UserAccountComponent,
    BooksComponent,
    CreateBooksComponent,
    CreateUserComponent,
    BookManagerComponent,
    NoticeComponent,
    IssueBooksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
