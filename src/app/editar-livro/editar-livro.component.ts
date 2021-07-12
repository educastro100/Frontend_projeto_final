import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebLivrosService } from '../web-livros.service';


@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private web : WebLivrosService
  ) { }
  
  parametros : any;
  livro : any = {
    nome: "",
    ano: "",
    autor: "",
    editora: "",
    tipo: "",
    obs: "",
    quantidade: 0 
  };

  ngOnInit(): void {
    let questoesParam = this.activatedRoute.queryParamMap.subscribe(params => this.parametros = params.get('_id') || 'None');

    console.log(this.parametros);
    this.recuperaRegistro(this.parametros);
    
  }


  recuperaRegistro(id :string ) {
    this.web.recuperaRegistro(id).subscribe(res => {
      
      this.livro = res[0];
      console.log(this.livro);
    })
  }

  editar(){
    this.web.editarLivro(this.livro).subscribe(res => { 
      if (res.ok == true){
        alert('A Edição foi realizada com sucesso');
        history.back();
      }else{
          alert("Edição não realizada!");
      }
    });
  }
  

}
