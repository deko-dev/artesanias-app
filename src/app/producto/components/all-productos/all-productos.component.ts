import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import Swal from 'sweetalert2';
import { ProductoService } from '../../../services/producto.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-all-productos',
  templateUrl: './all-productos.component.html',
  styleUrls: ['./all-productos.component.scss']
})
export class AllProductosComponent implements OnInit {

  @Input() uid: string;
  productos: Producto[];

  logeado: boolean;

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _productosService: ProductoService
  ) {
    this._productosService.productos
      .subscribe((res)=>{
        this.productos = res;
      })

      this._authService.auth.authState
                    .subscribe( (user) => {
                      if( !user ){
                        this.logeado = false
                        return;
                      } else {
                        this.logeado = true
                      }
                    })
  }

  ngOnInit(): void {
  }

  verProducto(){


    Swal.fire({
      title: `Nombre Producto!!`,
      text: 'Completa tus Datos en la Seccion Perfil, para realizar Compras y Ventas',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }

  agregarProducto(uid:string){

    console.log(uid);
    this.router.navigate(['productos'])

  }

  eliminarProducto(idProd: string){

    Swal.fire({
      title: `Está seguro de Borrar el Producto con ID: ${idProd}`,
      text: "Este cambio no se podrá revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productosService.deleteProducto(idProd)
      }
    })
  }

}
