import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // <-- FALTA ESTO

import { EmprendedorListComponent } from './emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor-detail/emprendedor-detail.component';

@NgModule({
  declarations: [
    EmprendedorListComponent,
    EmprendedorDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EmprendedorListComponent
  ]
})
export class EmprendedorModule { }
