import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    routes,
    FormsModule 
  ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, EmailComponent, MembersComponent ],
  bootstrap: [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule {}
