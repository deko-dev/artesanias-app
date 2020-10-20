import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './components/producto/producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { AllProductosComponent } from './components/all-productos/all-productos.component';


@NgModule({
  declarations: [ProductoComponent, EditarProductoComponent, VerProductoComponent, AllProductosComponent],
  exports: [AllProductosComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
