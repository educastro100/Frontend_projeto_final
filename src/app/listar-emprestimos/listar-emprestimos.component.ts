import { Component, OnInit } from '@angular/core';
import { WebEmprestimoService } from '../web-emprestimo.service';
import { Emprestimo } from '../Emprestimo';
import { WebUserService } from '../web-user.service';
import { WebLivrosService } from '../web-livros.service';
import { WebPedidoService } from '../web-pedido.service';
import { ListarLivrosComponent } from '../listar-livros/listar-livros.component';
import { Livro } from '../Livro';
import { Pedido } from '../Pedido';

@Component({
  selector: 'app-listar-emprestimos',
  templateUrl: './listar-emprestimos.component.html',
  styleUrls: ['./listar-emprestimos.component.css']
})
export class ListarEmprestimosComponent implements OnInit {

  listaEmprestimos: Emprestimo[] = [];
  listaPedidos : Pedido[] = [];
  listaLivros : Livro[] = [];
  op: string = "";

  constructor(private web: WebEmprestimoService, private web2: WebUserService,
    private webLivro : WebLivrosService,
    private webPedido : WebPedidoService
    ) { }


  carregaEmprestimos(): void{
    this.web.getEmprestimos().subscribe(res => {
      this.listaEmprestimos = res;
    })
  }

  ngOnInit(): void {
    
    this.carregaEmprestimos();
  }

  confirmaReserva(emprestimo: Emprestimo){
    
    this.op = "sub";
    // Atualiza o Status na tabela empréstimo
    this.web.atualizaStatus(emprestimo._id, "Em Andamento").subscribe(res => {
      if (res.ok == true){

          console.log("Atualizou no emprestimo!");
        
      }else{
        alert("Status não foi alterado por algum problema!")
      }
    });

    // Atualiza  a flag de emprestimo do usuário
    this.web2.setaFlag(emprestimo.id_usuario, true).subscribe(res =>{
      if (res.ok == true){
        console.log("Status alterado!");
      }else{
        console.log("Não deu certo!");
      }
    });

    this.recuperaRegistroPedido(emprestimo._id);
    window.location.reload();

  }

  recuperaRegistroPedido(id: string){
    console.log("dentro do recupera");
    this.webPedido.recuperaRegistro(id).subscribe(res => {
      this.listaPedidos = res;
      console.log(this.listaPedidos);

      for (const i in this.listaPedidos) {
        
        id = this.listaPedidos[i].id_livro;
        let registro = this.recuperaRegistroLivro(id);
        
      }
      
    })
  }

  recuperaRegistroLivro(id: string) : any{
    this.webLivro.recuperaRegistro(id).subscribe(res => {
      
      console.log("ANTES DE INSERIR NO ARRAY");
      console.log(res[0]);
      this.listaLivros.push(res[0]);
      this.atualizaLista(res[0]);
    })

    
  }

  atualizaLista(livro: any){
    
    
    console.log("Dentro do atualizaLista");
    console.log(livro);
    
    let valor : Number = 0;

    if (this.op == "sub"){
      valor = Number(livro.quantidade) - 1;
    }else{
      valor = Number(livro.quantidade) + 1;
    }
    

    this.webLivro.quantidadeLivro(livro._id, valor).subscribe(res => {
      if(res.ok == true){
        console.log("Registros atualizados!");
      }else{
        console.log("Erro!");
      }
    })


  }



  concluir(emprestimo: any ){

    this.op = "add";

    // Atualiza o Status na tabela empréstimo
    this.web.atualizaStatus(emprestimo._id, "Concluido").subscribe(res => {
      if (res.ok == true){

          console.log("Atualizou no emprestimo!");
        
      }else{
        alert("Status não foi alterado por algum problema!")
      }
    });

    // Atualiza  a flag de emprestimo do usuário
    this.web2.setaFlag(emprestimo.id_usuario, false).subscribe(res =>{
      if (res.ok == true){
        console.log("Status alterado!");
      }else{
        console.log("Não deu certo!");
      }
    });

    this.recuperaRegistroPedido(emprestimo._id);
    window.location.reload();
  }



  

}
