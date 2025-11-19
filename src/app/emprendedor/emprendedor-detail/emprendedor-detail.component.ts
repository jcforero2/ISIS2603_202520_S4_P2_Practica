import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {
  
  // Lista de emprendedores detallados quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Array<EmprendedorDetail> = [
    new EmprendedorDetail(1, 'Nicolás Rojas', 'Masculino', 'Ingeniería Industrial', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/rojas.jpg?raw=true', ["Dapta", "Imagine Apps"]),
    new EmprendedorDetail(2, 'Juan Pablo Urrea', 'Masculino', 'Ingeniería Industrial y Administración', "https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/urrea.jpg?raw=true", ["Rentandes"]),
    new EmprendedorDetail(3, 'Sebastián Correa', 'Masculino', 'Ingeniería Civil', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/correa.jpg?raw=true', ["Infinity"]),
    new EmprendedorDetail(4, 'Martín Peláez', 'Masculino', 'Ingeniería Mecánica', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/pelaez.jpg?raw=true', ["Infinity"]),
    new EmprendedorDetail(5, 'Santiago Cala', 'Masculino', 'Ingeniería Industrial y de Sistemas', 'https://github.com/k-garces/ISIS2603_202520_S4_P2_Practica/blob/main/img/cala.jpg?raw=true', ["Alfred"])
  ]

  @Input() emprendedor: Emprendedor | null = null;
  emprendedorDetail: EmprendedorDetail | null = null;

  // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
  // notese que esto es solo un placeholder hasta que implementen el servicio y el API
  ngOnChanges(): void {
    if (this.emprendedor) {
      this.emprendedorDetail = this.emprendedores.find(e => e.id === this.emprendedor!.id) || null;
    }
  }

}
