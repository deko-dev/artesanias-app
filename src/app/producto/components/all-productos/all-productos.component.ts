import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-productos',
  templateUrl: './all-productos.component.html',
  styleUrls: ['./all-productos.component.scss']
})
export class AllProductosComponent implements OnInit {

  constructor() { }

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

}
