import { Component, Input, OnChanges } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnChanges {

  @Input() emprendedor: Emprendedor | null = null;
  emprendedorDetail: EmprendedorDetail | null = null;

  constructor(private emprendedorService: EmprendedorService) {}

  ngOnChanges(): void {
    if (this.emprendedor) {
      this.emprendedorService.getEmprendedorDetail(this.emprendedor.id)
        .subscribe((detail) => {
          this.emprendedorDetail = detail;
        });
    }
  }
}

