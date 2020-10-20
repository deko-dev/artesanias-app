import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { User } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  guardar: boolean;

  public usuario: User;

  constructor(
    public auth: AngularFireAuth,
  ) { } 

  login() {
    return this.auth.signInWithPopup( new auth.GoogleAuthProvider() )
              .then((response)=>{
                this.guardar = response.additionalUserInfo.isNewUser;
                return true;
              })
              .catch((err)=>{
                return err
              })
  }

  logout() {
    return this.auth.signOut();
  }
}
