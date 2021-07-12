import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './Usuario';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebUserService {

  // baseURL =  "http://localhost:8040/api";
  baseURL =  "https://recondite-serious-cord.glitch.me/api";
  
  constructor(private http : HttpClient) { }


getUsers() : Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.baseURL + "/usuarios");
}

cadastrarUsuario(usuario: any): Observable<any> {
  
    // TO DO: Add verificação de livro registrado

    let body = new HttpParams();
    body = body.set("nome", usuario.nome);
    body = body.set("cpf", usuario.cpf);
    body = body.set("email", usuario.email);
    body = body.set("idade", usuario.idade);
    body = body.set("empAtivo", usuario.empAtivo);
    body = body.set("senha", usuario.senha);
    

    return this.http.post(this.baseURL + "/usuarios" , body, {observe: "response"});

}

deletaUsuario(usuario: any): Observable<any> {
  return this.http.delete(this.baseURL+"/usuarios/"+ usuario._id);
}


recuperaRegistro(id : string ) : Observable<any>{
  return this.http.get<Usuario>(this.baseURL+"/usuarios/"+ id);
}


editarUsuario(usuario : any) : Observable<any> {
  
  let body = new HttpParams();
  body = body.set("nome", usuario.nome);
  body = body.set("cpf", usuario.cpf);
  body = body.set("email", usuario.email);
  body = body.set("idade", usuario.idade);
  body = body.set("empAtivo", usuario.empAtivo);
  body = body.set("senha", usuario.senha);

  return this.http.put(this.baseURL + "/usuarios/" + usuario._id, body, {observe: "response"}) ;
}


setaFlag(id: string, empAtivo : any): Observable<any>{

  console.log("chegou aqui");
  let body = new HttpParams();
  body = body.set("empAtivo", empAtivo);

  return this.http.put(this.baseURL + "/usuarios/" + id, body, {observe: "response"});
}

}


