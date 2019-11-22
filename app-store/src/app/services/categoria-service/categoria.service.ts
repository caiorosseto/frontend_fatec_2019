import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService {

  constructor(
    private HttpClient: HttpClient
    ) { 
    super();
  }

  public Listar(): Observable<Categoria[]> {
      return this.HttpClient.get<Categoria[]>(this.EndPoint("Categoria"));
  }
}
