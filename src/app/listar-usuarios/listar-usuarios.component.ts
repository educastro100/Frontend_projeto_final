import { Component, OnInit } from '@angular/core';
import { WebUserService } from '../web-user.service';
import { Usuario } from '../Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(private web: WebUserService, private router: Router) { }

  ngOnInit(): void {
    this.carregaUsuarios();
  }


  carregaUsuarios() : void {
    this.web.getUsers().subscribe(res => {
      this.listaUsuarios = res;
    });
    }


    deletaUsuario(usuario: Usuario) : void{

      this.web.deletaUsuario(usuario).subscribe(res => {
        alert(res.msg);
        document.location.reload(true);
      })
  
    }

}
