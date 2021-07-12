import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { Livro } from '../Livro';
import { WebLivrosService } from '../web-livros.service';
import { WebUserService } from '../web-user.service';
import { WebPedidoService } from '../web-pedido.service';
import { WebEmprestimoService } from '../web-emprestimo.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-cadastrar-emprestimo',
  templateUrl: './cadastrar-emprestimo.component.html',
  styleUrls: ['./cadastrar-emprestimo.component.css']
})
export class CadastrarEmprestimoComponent implements OnInit {

  constructor(private webLivro: WebLivrosService,
    private webUser: WebUserService,
    private webEmprestimo: WebEmprestimoService,
    private webPedido: WebPedidoService
    
    ) { }



  listaUsuario : Usuario[] = [];
  listaLivro : Livro[] = [];

    userEmp : any = {
      nome: "",
      id: ""
    }


  objEmp : any =  {
    usuario : {

    },
    livro1 : '',
    livro2 : '',
    livro3 : ''
  }

  objretorno : any;

  ngOnInit(): void {
    this.getLivros();
    this.getUsers();
  }


  getLivros(){
    this.webLivro.getLivros().subscribe(res => {
      this.listaLivro = res;
    })
  }

  getUsers(){
    this.webUser.getUsers().subscribe(res => {
      this.listaUsuario = res;
    })
  }


  cadastrar(){
    console.log(this.userEmp);
    this.webEmprestimo.cadastrarEmprestimo(this.objEmp).subscribe(res => {
      if(res.ok == true){
        alert("Cadastro realizado com sucesso");
        console.log(res);
      }else{
        alert("Cadastro não realizado, revise seus dados!");
      }
    })
  }

}
