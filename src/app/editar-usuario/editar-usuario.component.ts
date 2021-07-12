import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebUserService } from '../web-user.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,     private web : WebUserService
    ) { }


    parametros : any;
    usuario = {
      nome: "",
      cpf: "",
      email: "",
      idade: "",
      empAtivo: false,
      senha: ""
    }

  ngOnInit(): void {
    let questoesParam = this.activatedRoute.queryParamMap.subscribe(params => this.parametros = params.get('_id') || 'None');

    console.log(this.parametros);
    this.recuperaRegistro(this.parametros);


  }

  recuperaRegistro(id :string ) {
    this.web.recuperaRegistro(id).subscribe(res => {
      
      this.usuario = res[0];
      console.log(this.usuario);
    })
  }

  editar(){
    this.web.editarUsuario(this.usuario).subscribe(res => { 
      if (res.ok == true){
        alert('A Edição foi realizada com sucesso');
        history.back();
      }else{
          alert("Edição não realizada!");
      }
    });
  }

}
