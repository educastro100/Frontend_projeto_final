import { Component, OnInit } from '@angular/core';
import { WebUserService } from '../web-user.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private web: WebUserService) { }

  usuario = {
    nome: "",
    cpf: "",
    email: "",
    idade: "",
    empAtivo: false,
    senha: ""
  }


  cadastrar(){
    this.web.cadastrarUsuario(this.usuario).subscribe(res => {
      if(res.ok == true){
        alert("Cadastro realizado com sucesso!");
        history.back();
      }else{
        alert("Cadastro não realizado, revise seus dados!");
      }
    })
  }


  ngOnInit(): void {
  }

}
