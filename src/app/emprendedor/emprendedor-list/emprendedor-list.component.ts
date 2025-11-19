import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {

  emprendedores: Emprendedor[] = [];

  @Output() emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;

  constructor(private emprendedorService: EmprendedorService) {}

  ngOnInit(): void {
    this.emprendedorService.getEmprendedores()
      .subscribe((data) => {
        this.emprendedores = data;
      });
  }

  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.emprendedorSeleccionado = emprendedor;
    this.seleccionado = true;
  }
}

