import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaBusquedaComponent } from './component/vista-busqueda/vista-busqueda.component';
import { VistaCRUDComponent } from './component/vista-crud/vista-crud.component';
import { VistaUsuarioComponent } from './component/vista-usuario/vista-usuario.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'buscar', component: VistaBusquedaComponent },
  { path: 'crud', component: VistaCRUDComponent },
  { path: 'vista', component: VistaUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
