import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService {

  constructor(private HttpClient: HttpClient) { 
    super();
  }

  public Listar(): Observable<Produto[]> {
    return this.HttpClient.get<Produto[]>(this.EndPoint("Produto/Listar"));
  }

  public Deletar(id: number) {
    this.HttpClient.delete(`Produto/Deletar/${id}`);
  }

  public Consultar(id: number): Observable<Produto> {
    return this.HttpClient.get<Produto>(this.EndPoint(`Produto/Consultar/${id}`));
  }

  public ConsultarPorCategoria(idCategoria: number): Observable<Produto[]> {
    return this.HttpClient.get<Produto[]>(this.EndPoint(`Produto/ConsultarPorCategoria/${idCategoria}`));
  }
  
}
