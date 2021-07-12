import { Component, OnInit } from '@angular/core';
import { WebEmprestimoService } from '../web-emprestimo.service';
import { WebLivrosService } from '../web-livros.service';
import { WebPedidoService } from '../web-pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../Livro';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-detalhes-emprestimo',
  templateUrl: './detalhes-emprestimo.component.html',
  styleUrls: ['./detalhes-emprestimo.component.css']
})
export class DetalhesEmprestimoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private webLivro : WebLivrosService,
    private webEmprestimo: WebEmprestimoService,
    private webPedido: WebPedidoService
    ) { }


    listaLivros : Livro[] = [];
    listaPedidos: Pedido[] = [];

  emprestimo : any = {
    id_usuario : String,
    nomeUsuario: String,
    status: String,
    dataIni: String,
    dataFim: String
  }

  parametros: any;
  
  ngOnInit(): void {
    let questoesParam = this.activatedRoute.queryParamMap.subscribe(params => this.parametros = params.get('_id') || 'None');

    this.recuperaRegistro(this.parametros);
  }

  recuperaRegistro(id :string ) {
    this.webEmprestimo.recuperaRegistro(id).subscribe(res => {
      
      this.emprestimo = res[0];
      this.recuperaRegistroPedido(this.emprestimo._id);
      
    })
  }

  recuperaRegistroPedido(id: string){
    this.webPedido.recuperaRegistro(id).subscribe(res => {
      this.listaPedidos = res;
      console.log(this.listaPedidos);

      for (const i in this.listaPedidos) {
        
        id = this.listaPedidos[i].id_livro;
        let registro = this.recuperaRegistroLivro(id);
        
        
      }
      console.log(this.listaLivros);

    })
  }

  recuperaRegistroLivro(id: string) : any{
    this.webLivro.recuperaRegistro(id).subscribe(res => {
      
      // console.log(res[0]);
      this.listaLivros.push(res[0]);
    })
  }

}
