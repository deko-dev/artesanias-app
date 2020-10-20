import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: "root"
})
export class UsersService{

  private usuariosCollection: AngularFirestoreCollection<User>

  private usuarios: Observable<User[]>

  usuario: User;
  usuarioActual: User;


  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private _authService: AuthService
  ) { 

    this.auth.authState
              .subscribe( (user) => {

                if( !user ){
                  return;
                }

                this.usuario = {
                  avatar: user.photoURL,
                  portada: '',
                  uid: user.uid,
                  nid: '',
                  name: user.displayName,
                  username: user.displayName.toLowerCase().replace(' ', '_'),
                  email: user.email                  
                }

                if( this._authService.guardar ){
                  this.guardarUsuario( this.usuario );

                  Swal.fire({
                    icon: 'success',
                    title: `Bienvenido ${this.usuario.name}!!`,
                    text: 'Completa tus Datos en la Seccion Perfil, para realizar Compras y Ventas',
                  })

                }

                this.router.navigate(['/'])
              })
    
    this.usuariosCollection = afs.collection<User>('Usuarios')   
    this.usuarios = this.usuariosCollection.valueChanges({idField: 'idPath'});

  } 

  private guardarUsuario(user: User) {

    this.usuariosCollection.doc(user.uid.slice(0, 10)).set({...user})
    .then((res)=>{
        return res
    })
    .catch((err) =>{
      return err
    })
  }


  public getUsuario(uid:string){
    
    return this.usuariosCollection.doc(uid).get();

  }
}