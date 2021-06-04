import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  signup=(email,password)=>
  {
      return this.auth.createUserWithEmailAndPassword(email,password)
      
  }

  login=(email,password)=>
  {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  getUser=()=>
  {
    return this.auth.authState;
  }

  logout=()=>
  {
    return this.auth.signOut();
  }

}

