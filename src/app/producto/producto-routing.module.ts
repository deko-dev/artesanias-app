import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductosComponent } from './components/all-productos/all-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

const routes: Routes = [
  { path: '', component: AllProductosComponent },
  { path: ':username', component: VerProductoComponent },

  // { path: ':username' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
