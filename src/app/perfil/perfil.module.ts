import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPefilComponent } from './components/ver-pefil/ver-pefil.component';
import { PerfilRoutingModule } from './perfil.routes';
import { ProductoModule } from '../producto/producto.module';



@NgModule({
  declarations: [VerPefilComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ProductoModule
  ]
})
export class PerfilModule { }
