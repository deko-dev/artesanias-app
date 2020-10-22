import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';


@Injectable({
    providedIn: "root"
})
export class ProductoService{

  private productosCollection: AngularFirestoreCollection<Producto>

  productos: Observable<Producto[]>

  public subiendo:boolean;

  producto: Producto;
  usuarioActual: Producto;


  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private router: Router
  ) { 
    this.productosCollection = afs.collection<Producto>('Productos')   
    this.productos = this.productosCollection.valueChanges();

  } 

  guardarProducto(producto: Producto, event) {

    if( producto.id.toString() == ''){
      producto.id = this.generarId();
    }

    this.productosCollection.doc(producto.id.toString()).set({...producto})
    .then((res)=>{
        if(!event){
          Swal.fire('Guardado!', '', 'success')
              .then(()=>{
                this.router.navigate([`perfil/${producto.uidUser}`]);
              })
        }
        this.cargarImagen(producto.id, event, producto.uidUser);
        console.log(res);
    })
    .catch((err) =>{
      return err
    })
  }


  public getProducto(idProd:string){
    
    return this.productosCollection.doc(idProd).get();

  }

  generarId(){
    let date = new Date();

    return date.getMilliseconds() * (date.getMilliseconds() * 100)

  }

  cargarImagen(idProd:number, event, uid:string){

    const file = event.target.files[0];

    const storageRef = this.storage.ref(`Productos_Imagenes/${file.name}`)

    const task = storageRef.put(file);

    let progreso;

    task.snapshotChanges()
        .subscribe((res)=>{
            if(res.state === 'success'){
                storageRef.getDownloadURL()
                        .subscribe((res)=>{
                            this.guardarImagen(idProd, res, file.name)   
                            Swal.fire('Guardado!', '', 'success')
                                .then(()=>{
                                  this.router.navigate([`perfil/${uid}`]);
                                })
                        })
            } else{
                Swal.fire('<i class="fa fa-sync-alt fa-spin fa-2x"></i> CARGANDO!!!', '', 'info')
            }
        })
  }

  guardarImagen(idProd:number, imgUrl:string, fileName:string){

    const stringId = idProd.toString();

    this.productosCollection.doc(stringId).update({imagen: imgUrl, nombreImg: fileName})
        .then((res)=>{
            console.log(res)
        })
        .catch((err) =>{
        return err
        })

  }

  deleteProducto(idProd: string, fileName:string = ''){

    this.productosCollection.doc(idProd.toString()).delete()
      .then((res)=>{
        if(fileName != ''){
          const storageRef = this.storage.ref(`Productos_Imagenes/${fileName}`);
          storageRef.delete()
        }
        Swal.fire(
          'Eliminado!',
          'El Producto fue Borrado',
          'success'
        )
      })
      .catch((err) =>{
      return err
      })
  }
}