import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Emprestimo } from './Emprestimo';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebEmprestimoService {


  // baseURL = "http://localhost:8040/api";
  baseURL =  "https://recondite-serious-cord.glitch.me/api";

  constructor(private http : HttpClient) { }


  getEmprestimos(): Observable<Emprestimo[]>{
    return this.http.get<Emprestimo[]>(this.baseURL+"/emprestimos");
  }

  recuperaRegistro(id: string) : Observable<any>{
    return this.http.get<Emprestimo>(this.baseURL + "/emprestimos/" + id);
  }


  atualizaStatus(id: string, state: string): Observable<any>{

    console.log("teste" + id + state);

    let body = new HttpParams();
    body = body.set("status", state);

    return this.http.put(this.baseURL + "/emprestimos/" + id , body, {observe: "response"});
  }

  cadastrarEmprestimo(emprestimo: any): Observable<any> {
  
    // TO DO: Add verificação de livro registrado

    let body = new HttpParams();
    body = body.set("id_usuario", emprestimo.usuario._id);
    body = body.set("nomeUsuario", emprestimo.usuario.nome);
    body = body.set("status", "Reservado");
    body = body.set("dataIni", "23/01/2021");
    body = body.set("dataFim", "27/01/2021");
    
    

    return this.http.post(this.baseURL + "/emprestimos" , body, {observe: "response"});

}


}
