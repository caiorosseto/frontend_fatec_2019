import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente-service/cliente.service';

@Component({
  selector: 'page-cliente',
  templateUrl: './page-cliente.component.html',
  styleUrls: ['./page-cliente.component.css']
})

export class PageClienteComponent implements OnInit {
  public Cliente : Cliente;
  public Mensagem : String;

  constructor(private ClienteService : ClienteService) {
    this.Cliente = new Cliente();
   }

  ngOnInit() {  
  }

  public CarregarCliente() {  
  }

  public Salvar() {
    if(this.Cliente.Senha == this.Cliente.ConfirmarSenha)
      this.Cadastrar();

    else
      this.Mensagem = "Senhas não são iguais";
       
  }

  private Cadastrar() { 
    this.ClienteService.Inserir(this.Cliente).subscribe(Cliente => this.Mensagem = "Usuário cadastrado com sucesso");

  }

  private Alterar() {
  }

}
