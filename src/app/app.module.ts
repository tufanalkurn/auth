import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponentmain }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [
    AppComponentmain,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponentmain]
})
export class AppModule { }
