import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  loginAdmin: boolean = false;
  loginUser: boolean = false;
  usuario = "";
  senha = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  setLoginAdmin(): void{
    this.loginAdmin = true;
    this.loginUser = false;
  }

  setLoginUser(){
    this.loginAdmin = false;
    this.loginUser = true;
  }

  validaLoginAdmin(){
    if(this.usuario == "admin" && this.senha == "admin"){
      alert("Login valido!");
      this.router.navigate(['/admin']);
    }else{
      alert("Login de Administrador inválido!");
    }
  }

  validaLoginUser(){
    console.log("teste");
  }



}
