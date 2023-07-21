import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agenda',
    loadChildren: () =>
      import('./pages/agenda/agenda.module').then(
        (m) => m.AgendaModule
      ),
  },
  {
    path: '**',
    redirectTo: 'agenda',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
