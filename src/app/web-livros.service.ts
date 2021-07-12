import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Livro } from './Livro';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebLivrosService {

  // baseURL =  "http://localhost:8040/api";
  baseURL =  "https://recondite-serious-cord.glitch.me/api";


  constructor(private http : HttpClient) { }

  // Método para retornar todos os livros
  getLivros() : Observable<Livro[]>{

     return this.http.get<Livro[]>(this.baseURL + "/livros");
  }

  cadastrarLivro(livro : any) : Observable<any>{

    // TO DO: Add verificação de livro registrado

    let body = new HttpParams();
    body = body.set("nome", livro.nome);
    body = body.set("ano", livro.ano);
    body = body.set("autor", livro.autor);
    body = body.set("editora", livro.editora);
    body = body.set("tipo", livro.tipo);
    body = body.set("obs", livro.obs);
    body = body.set("quantidade", livro.quantidade);

    return this.http.post(this.baseURL + "/livros" , body, {observe: "response"});

  }

  deletaLivro(livro: any): Observable<any>{
    return this.http.delete(this.baseURL+"/livros/" + livro._id);
  }
  

recuperaRegistro(id: string) : Observable<any>{
  return this.http.get<Livro>(this.baseURL + "/livros/" + id);
}

editarLivro(livro : any) : Observable<any>{
  let body = new HttpParams();
  body = body.set("nome", livro.nome);
  body = body.set("ano", livro.ano.toString());
  body = body.set("autor", livro.autor.toString());
  body = body.set("editora", livro.editora.toString());
  body = body.set("tipo", livro.tipo.toString());
  body = body.set("obs", livro.obs.toString());
  body = body.set("quantidade", livro.quantidade);

  return this.http.put(this.baseURL + "/livros/" + livro._id, body, {observe: "response"});

}

quantidadeLivro(id: string, valor: any): Observable<any>{
  let body = new HttpParams();
  body = body.set("quantidade", valor);
  

  return this.http.put(this.baseURL + "/livros/" + id, body, {observe:"response"});

} 

}
