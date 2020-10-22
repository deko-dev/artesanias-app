import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductosComponent } from './components/all-productos/all-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllProductosComponent, 
    children:[
    ]
  },
  { path: 'ver', component: VerProductoComponent },
  { path: 'new', component: EditarProductoComponent },
  { path: 'edit/:idprod', component: EditarProductoComponent },

  // { path: ':username' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
