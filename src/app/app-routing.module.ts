import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorisedToLogin=()=>redirectUnauthorizedTo(['login']);


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnauthorisedToLogin} 
  },
  {
    path:'login',
    component:LoginComponent,
   
  },
  {
    path:'signup',
    component:SignupComponent,
   

  },
  {
    path:'**',
    component:PagenotfoundComponent,
   

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
