import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClienteService extends BaseService {

  constructor(
    private HttpClient: HttpClient
  ) {
    super();
  }

  public Inserir(cliente: Cliente): Observable<Cliente> {
     return null;
  }

  public Atualizar(cliente: Cliente): Observable<Cliente> {
    return null;
  }

  public Consultar(): Observable<Cliente> {
    return null;
  }
}
