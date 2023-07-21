import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { AddComponent } from './pages/add/add.component';
import { HeaderComponent } from './component/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    AddComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
