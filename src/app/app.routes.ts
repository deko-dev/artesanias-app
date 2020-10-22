import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [ 
    { 
        path: '', 
        loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule) 
    },
    { 
        path: 'perfil/:uid', 
        loadChildren: () => import('./perfil/perfil.module')
        .then(m => m.PerfilModule)
    },
    { 
        path: 'productos', 
        loadChildren: () => import('./producto/producto.module')
        .then(m => m.ProductoModule) 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
