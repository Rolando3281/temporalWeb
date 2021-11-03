import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarBomberoComponent } from './componentes/agregar-bombero/agregar-bombero.component';
import { EditarBomberoComponent } from './componentes/editar-bombero/editar-bombero.component';
import { ListarBomberoComponent } from './componentes/listar-bombero/listar-bombero.component';

const routes: Routes = [

  {path: '',pathMatch:'full',redirectTo:'agregar-bombero.component'},
  {path: 'agregar-bombero',component:AgregarBomberoComponent},
  {path: 'editar-bombero/:id',component:EditarBomberoComponent},
  {path: 'listar-bombero',component:ListarBomberoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
