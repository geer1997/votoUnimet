import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'votoUnimet'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, UserLoginComponent, UserProfileComponent ],
  providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule {}