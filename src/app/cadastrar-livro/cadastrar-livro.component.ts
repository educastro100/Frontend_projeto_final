import { Component, OnInit } from '@angular/core';
import { WebLivrosService } from '../web-livros.service';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  constructor(private web: WebLivrosService) { }

  
  livro = {
    nome: "",
    ano: "",
    autor: "",
    editora: "",
    tipo: "",
    obs: "",
    quantidade: 0 
  }
  

  cadastrar(){

    this.web.cadastrarLivro(this.livro).subscribe(res => {
      if(res.ok == true){
        alert("Cadastro realizado com sucesso");
        history.back();
      }else{
        alert("Cadastro não realizado, revise seus dados!");
      }
    })

  }


  ngOnInit(): void {
  }

}
