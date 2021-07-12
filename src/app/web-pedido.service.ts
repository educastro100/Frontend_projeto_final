import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pedido } from './Pedido';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebPedidoService {

  // baseURL =  "http://localhost:8040/api";
  baseURL =  "https://recondite-serious-cord.glitch.me/api";


  constructor(private http : HttpClient) { }


  recuperaRegistro(id: string) : Observable<any>{
    return this.http.get<Pedido>(this.baseURL + "/pedidos/" + id);
  }

}
