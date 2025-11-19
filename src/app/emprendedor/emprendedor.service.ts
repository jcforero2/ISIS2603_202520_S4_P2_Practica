import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendedor } from './emprendedor';
import { EmprendedorDetail } from './emprendedor-detail';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  private apiUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json';

  constructor(private http: HttpClient) {}

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>(`${this.apiUrl}/emprendedores.json`);
  }

  getEmprendedorDetail(id: number): Observable<EmprendedorDetail> {
    return this.http.get<EmprendedorDetail>(`${this.apiUrl}/emprendedor-detail-${id}.json`);
  }
}
