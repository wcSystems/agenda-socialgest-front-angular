import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  { 
    path: '',
    component: ListComponent,
  },
  { 
    path: 'view',
    children: [
      {
        path: ':id',
        component: ViewComponent
      },
    ],
  },
  { 
    path: 'add',
    component: AddComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
