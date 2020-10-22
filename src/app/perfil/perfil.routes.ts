import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VerPefilComponent } from './components/ver-pefil/ver-pefil.component';

const routes: Routes = [
    { 
        path: '', 
        component: VerPefilComponent,
        children: [
            {path: ':uid/edit', component: VerPefilComponent}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilRoutingModule {}
