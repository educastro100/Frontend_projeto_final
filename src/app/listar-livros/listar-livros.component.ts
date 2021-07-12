import { Component, OnInit } from '@angular/core';
import { WebLivrosService } from '../web-livros.service';
import { Livro } from '../Livro';
import { Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  listaLivros: Livro[] = [];


  constructor(private web: WebLivrosService, private router: Router) { }


  carregaLivros() : void {
    this.web.getLivros().subscribe(res => {
      
      this.listaLivros = res;
      console.log(this.listaLivros);
    });
  }

  deletaLivro(livro: Livro) : void{

    this.web.deletaLivro(livro).subscribe(res => {
      alert(res.msg);
      document.location.reload(true);
    })

  }



  ngOnInit(): void {
    this.carregaLivros();
  }

}
